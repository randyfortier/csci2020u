package csci2020u.libgdx.samples;

import com.badlogic.gdx.ApplicationAdapter;
import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.Input;
import com.badlogic.gdx.ai.steer.behaviors.Arrive;
import com.badlogic.gdx.ai.steer.behaviors.Hide;
import com.badlogic.gdx.audio.Music;
import com.badlogic.gdx.audio.Sound;
import com.badlogic.gdx.controllers.Controllers;
import com.badlogic.gdx.graphics.GL20;
import com.badlogic.gdx.graphics.OrthographicCamera;
import com.badlogic.gdx.graphics.Texture;
import com.badlogic.gdx.graphics.g2d.SpriteBatch;
import com.badlogic.gdx.math.Vector2;
import com.badlogic.gdx.math.Vector3;
import com.badlogic.gdx.physics.box2d.*;

import static csci2020u.libgdx.samples.Utils.WORLD_TO_SCREEN;

/**
 * Adding physics to our objects
 * Adding keyboard controls for our player
 * Adding gamepad controls for our player
 */
public class SampleGame extends ApplicationAdapter {
	public static float SCALE = 1.0f;

	private OrthographicCamera camera;

	// physics
	private Box2DDebugRenderer box2dRenderer;
	private World world;
	private Body player;
	private Body sidekick;
	private Body platform1;
	private Body platform2;
	private Body platform3;
	private Body platform4;
	private Body platform5;

	// graphics
	private SpriteBatch batch;
	private Texture largePlatformTexture;
	private Texture smallPlatformTexture;
	private Texture spriteSheetTexture;
	private boolean flipX = false;
	private int spriteRow = 1;
	private int spriteCol = 0;

	// controls
	private boolean movingRight = false;
	private boolean movingLeft = false;
	private boolean jumping = false;

	@Override
	public void create() {
		camera = new OrthographicCamera();
		camera.setToOrtho(false, Gdx.graphics.getWidth() / SCALE, Gdx.graphics.getHeight() / SCALE);

		world = new World(new Vector2(0, -9.8f), false);
		box2dRenderer = new Box2DDebugRenderer();
		// false -> don't render the boxes
		box2dRenderer.setDrawBodies(false);

		ControllerHandler controllerHandler = new ControllerHandler(this);
		Controllers.addListener(controllerHandler);
		KeyboardHandler keyboardHandler = new KeyboardHandler(this);
		Gdx.input.setInputProcessor(keyboardHandler);

		player = BodyFactory.createBoxBody(world, 8, 10, 70, 70, false);
		platform1 = BodyFactory.createBoxBody(world, 0, 0, 890, 100, true);
		platform2 = BodyFactory.createBoxBody(world, 400, 250, 251, 100, true);
		platform3 = BodyFactory.createBoxBody(world, 300, 500, 251, 100, true);
		platform4 = BodyFactory.createBoxBody(world, 400, 750, 251, 100, true);
		platform5 = BodyFactory.createBoxBody(world, 300, 1000, 251, 100, true);

		batch = new SpriteBatch();
		largePlatformTexture = new Texture("images/large_platform.png");
		smallPlatformTexture = new Texture("images/small_platform.png");
		spriteSheetTexture = new Texture("images/hero_spritesheet.png");
	}

	@Override
	public void render() {
		float delta = 1 / 60f;

		// game updates
		updateState(delta);

		// draw
		Gdx.gl.glClearColor(0f, 0f, 0f, 1f);
		Gdx.gl.glClear(GL20.GL_COLOR_BUFFER_BIT);

		if (player.getLinearVelocity().x < 0f) {
			flipX = true;
		} else if (player.getLinearVelocity().x > 0f) {
			flipX = false;
		}

		if (player.getLinearVelocity().y != 0) {
			spriteRow = 3;
			spriteCol = 2;
		} else {
			spriteRow = 1;
		}

		int spriteOffsetX = spriteCol * 80; // the width of the frames are 80 pixels
		int spriteOffsetY = spriteRow * 94; // the height of the frames are 94 pixels

		batch.begin();
		batch.draw(largePlatformTexture, platform1.getPosition().x * WORLD_TO_SCREEN - (largePlatformTexture.getWidth() / 2), platform1.getPosition().y * WORLD_TO_SCREEN - (largePlatformTexture.getHeight() / 2));
		batch.draw(smallPlatformTexture, platform2.getPosition().x * WORLD_TO_SCREEN - (smallPlatformTexture.getWidth() / 2), platform2.getPosition().y * WORLD_TO_SCREEN - (smallPlatformTexture.getHeight() / 2));
		batch.draw(smallPlatformTexture, platform3.getPosition().x * WORLD_TO_SCREEN - (smallPlatformTexture.getWidth() / 2), platform3.getPosition().y * WORLD_TO_SCREEN - (smallPlatformTexture.getHeight() / 2));
		batch.draw(smallPlatformTexture, platform4.getPosition().x * WORLD_TO_SCREEN - (smallPlatformTexture.getWidth() / 2), platform4.getPosition().y * WORLD_TO_SCREEN - (smallPlatformTexture.getHeight() / 2));
		batch.draw(smallPlatformTexture, platform5.getPosition().x * WORLD_TO_SCREEN - (smallPlatformTexture.getWidth() / 2), platform5.getPosition().y * WORLD_TO_SCREEN - (smallPlatformTexture.getHeight() / 2));

		/*
		texture - the texture to be drawn
		x - the x-coordinate in screen space (left: player.getPosition().x - half width of sprite)
		y - the y-coordinate in screen space (bottom: player.getPosition().y - half height of sprite)
		originX - the x-coordinate of the scaling and rotation origin relative to the screen space coordinates (0)
		originY - the y-coordinate of the scaling and rotation origin relative to the screen space coordinates (0)
		   Note:  These should be player.getPosition().x, player.getPosition().y
		width - the width in pixels   (70)
		height - the height in pixels (70)
		scaleX - the scale of the rectangle around originX/originY in x (1)
		scaleY - the scale of the rectangle around originX/originY in y (1)
		rotation - the angle of counter clockwise rotation of the rectangle around originX/originY (0)
		srcX - the x-coordinate in texel space   (0)
		srcY - the y-coordinate in texel space   (94)
		srcWidth - the source width in texels    (80)
		srcHeight - the source height in texels  (94)
		flipX - whether to flip the sprite horizontally (false)
		flipY - whether to flip the sprite vertically   (false)
		 */
		batch.draw(spriteSheetTexture,
				   (player.getPosition().x * WORLD_TO_SCREEN) - 35, (player.getPosition().y * WORLD_TO_SCREEN - 35),
		           0, 0, 70, 70, 1, 1, 0, spriteOffsetX, spriteOffsetY, 80, 94, flipX, false);
		batch.end();

		//box2dRenderer.render(world, camera.combined.scl(WORLD_TO_SCREEN));

		if(Gdx.input.isKeyJustPressed(Input.Keys.ESCAPE)) Gdx.app.exit();

		// go to the next frame of the animation
		if ((spriteRow == 1) && (movingLeft || movingRight)) {
			spriteCol = (spriteCol + 1) % 6;
		}
	}

	public void updateState(float delta) {
		world.step(delta, 6, 2);

		moveObjects(delta);
		updateCamera();

		batch.setProjectionMatrix(camera.combined);
	}

	public void moveLeft() {
		this.movingRight = false;
		this.movingLeft = true;
	}

	public void moveRight() {
		this.movingRight = true;
		this.movingLeft = false;
	}

	public void stopMoving() {
		this.movingRight = false;
		this.movingLeft = false;
	}

	public void jump() {
		this.jumping = true;
	}

	private void moveObjects(float delta) {
		// update the player's position
		if (movingLeft) {
			player.setLinearVelocity(-5, player.getLinearVelocity().y);
		} else if (movingRight) {
			player.setLinearVelocity(5, player.getLinearVelocity().y);
		} else {
			player.setLinearVelocity(0, player.getLinearVelocity().y);
		}

		if (jumping) {
			player.applyForceToCenter(0, 300, false);
			jumping = false;
		}
	}

	public void updateCamera() {
		// the camera should follow the player
		Vector3 position = camera.position;
		position.x = player.getPosition().x * WORLD_TO_SCREEN;
		position.y = player.getPosition().y * WORLD_TO_SCREEN;
		camera.position.set(position);

		camera.update();
	}

	@Override
	public void resize(int width, int height) {
		camera.setToOrtho(false, width / SCALE, height / SCALE);
	}

	@Override
	public void dispose() {
		world.dispose();
		box2dRenderer.dispose();
		batch.dispose();
	}
}
