package csci2020u.libgdx.samples;

import com.badlogic.gdx.ApplicationAdapter;
import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.Input;
import com.badlogic.gdx.graphics.GL20;
import com.badlogic.gdx.graphics.OrthographicCamera;
import com.badlogic.gdx.graphics.Texture;
import com.badlogic.gdx.graphics.g2d.SpriteBatch;
import com.badlogic.gdx.math.Vector2;
import com.badlogic.gdx.math.Vector3;
import com.badlogic.gdx.physics.box2d.Body;
import com.badlogic.gdx.physics.box2d.Box2DDebugRenderer;
import com.badlogic.gdx.physics.box2d.World;

import static csci2020u.libgdx.samples.Utils.WORLD_TO_SCREEN;

public class SampleGame extends ApplicationAdapter {
	// graphics
	private SpriteBatch batch;
	private Texture playerSprite;
	private Texture playerSpriteSheet;
	private Texture smallPlatform;
	private Texture largePlatform;

	// physics objects
    private World world;
    private Body playerBody;
    private Body platform1Body;
    private Body platform2Body;
    private Body platform3Body;
    private Body platform4Body;
    private Body platform5Body;
    private Box2DDebugRenderer box2DRenderer;

	//private float playerX = 200, playerY = 100;
	private float platform1X = 0, platform1Y = 0;
	private float platform2X = 400, platform2Y = 250;
	private float platform3X = 300, platform3Y = 500;
	private float platform4X = 400, platform4Y = 750;
	private float platform5X = 300, platform5Y = 1000;

	private OrthographicCamera camera;

	@Override
	public void create() {
		camera = new OrthographicCamera();
		camera.setToOrtho(false, Gdx.graphics.getWidth(),
				                 Gdx.graphics.getHeight());

        world = new World(new Vector2(0, -9.8f), false);
        box2DRenderer = new Box2DDebugRenderer();
        box2DRenderer.setDrawBodies(true);

        KeyboardHandler keyboardHandler = new KeyboardHandler(this);
        Gdx.input.setInputProcessor(keyboardHandler);

        playerBody = BodyFactory.createBoxBody(world, 0, 100, 70, 70, false);
        platform1Body = BodyFactory.createBoxBody(world, 0, 0, 890, 100, true);
        platform2Body = BodyFactory.createBoxBody(world, 400, 250, 251, 100, true);
        platform3Body = BodyFactory.createBoxBody(world, 300, 500, 251, 100, true);
        platform4Body = BodyFactory.createBoxBody(world, 400, 750, 251, 100, true);
        platform5Body = BodyFactory.createBoxBody(world, 300, 1000, 251, 100, true);

		batch = new SpriteBatch();
		playerSprite = new Texture("images/hero.png");
		playerSpriteSheet = new Texture("images/hero_spritesheet.png");
		smallPlatform = new Texture("images/small_platform.png");
		largePlatform = new Texture("images/large_platform.png");
	}

    private void update(float timeStep) {
		world.step(timeStep, 6, 2);

		// move our objects
		moveObjects();

        updateCamera();

		batch.setProjectionMatrix(camera.combined);
    }

	private void moveObjects() {
		// handle the walking
		if (moveLeft) {
			playerBody.setLinearVelocity(-5, playerBody.getLinearVelocity().y);
		} else if (moveRight) {
			playerBody.setLinearVelocity(5, playerBody.getLinearVelocity().y);
		} else {
			playerBody.setLinearVelocity(0, playerBody.getLinearVelocity().y);
		}

		// handle the jumping
		if (jumping) {
			playerBody.applyForceToCenter(0, 300, false);
			jumping = false;
		}
	}

	private boolean moveLeft = false;
	private boolean moveRight = false;
	private boolean jumping = false;
	public void moveLeft() {
		moveLeft = true;
		moveRight = false;
	}

	public void moveRight() {
		moveLeft = false;
		moveRight = true;
	}

	public void stopMoving() {
		moveLeft = false;
		moveRight = false;
	}

	public void jump() {
		jumping = true;
	}

	private void updateCamera() {
        Vector3 position = camera.position;

        position.x = playerBody.getPosition().x * WORLD_TO_SCREEN;
        position.y = playerBody.getPosition().y * WORLD_TO_SCREEN;

        camera.position.set(position);
        camera.update();
    }

	private int spriteCol = 0;
	private int spriteRow = 1;

	@Override
	public void render() {
		float timeStep = 1f/60f;

        update(timeStep);

		Gdx.gl.glClearColor(0, 0, 0, 1);
		Gdx.gl.glClear(GL20.GL_COLOR_BUFFER_BIT);

		if (playerBody.getLinearVelocity().y != 0) {
			spriteRow = 3;
			spriteCol = 2;
		} else {
			spriteRow = 1;
		}
		int sourceX = spriteCol * 80;
		int sourceY = spriteRow * 94;

		batch.begin();
        batch.draw(largePlatform, platform1Body.getPosition().x * WORLD_TO_SCREEN - largePlatform.getWidth() / 2, platform1Body.getPosition().y * WORLD_TO_SCREEN - largePlatform.getHeight() / 2);
        batch.draw(smallPlatform, platform2Body.getPosition().x * WORLD_TO_SCREEN - smallPlatform.getWidth() / 2,
                platform2Body.getPosition().y * WORLD_TO_SCREEN - smallPlatform.getHeight() / 2);
        batch.draw(smallPlatform, platform3Body.getPosition().x * WORLD_TO_SCREEN - smallPlatform.getWidth() / 2,
                platform3Body.getPosition().y * WORLD_TO_SCREEN - smallPlatform.getHeight() / 2);
        batch.draw(smallPlatform, platform4Body.getPosition().x * WORLD_TO_SCREEN - smallPlatform.getWidth() / 2,
                platform4Body.getPosition().y * WORLD_TO_SCREEN - smallPlatform.getHeight() / 2);
        batch.draw(smallPlatform, platform5Body.getPosition().x * WORLD_TO_SCREEN - smallPlatform.getWidth() / 2,
                platform5Body.getPosition().y * WORLD_TO_SCREEN - smallPlatform.getHeight() / 2);

		batch.draw(playerSpriteSheet,
				playerBody.getPosition().x * WORLD_TO_SCREEN - 35,
                playerBody.getPosition().y * WORLD_TO_SCREEN - 35,
				0, 0, 70, 70, 1, 1, 0,
				sourceX, sourceY, playerSprite.getWidth(), playerSprite.getHeight(),
				moveLeft, false);

		batch.end();

        box2DRenderer.render(world, camera.combined.scl(WORLD_TO_SCREEN));

		if (Gdx.input.isKeyPressed(Input.Keys.ESCAPE)) {
			Gdx.app.exit();
		}

		// go to the next animation frame
		if ((spriteRow == 1) && (moveLeft || moveRight)) {
			spriteCol = (spriteCol + 1) % 6;
		}
	}

	@Override
	public void resize(int width, int height) {
		camera.setToOrtho(false, width, height);
	}

	@Override
	public void dispose() {
		batch.dispose();
		playerSprite.dispose();
		smallPlatform.dispose();
		largePlatform.dispose();
	}
}
