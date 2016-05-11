package csci2020u.libgdx.samples;

import com.badlogic.gdx.physics.box2d.*;

import static csci2020u.libgdx.samples.Utils.WORLD_TO_SCREEN;

public class BodyFactory {
    public static Body createBoxBody(World world, int x, int y,
                                     int width, int height,
                                     boolean isStatic) {
        Body physicsBody;

        BodyDef bodyDef = new BodyDef();
        bodyDef.type = isStatic ? BodyDef.BodyType.StaticBody : BodyDef.BodyType.DynamicBody;
        bodyDef.position.set(x / WORLD_TO_SCREEN, y / WORLD_TO_SCREEN);
        bodyDef.fixedRotation = true;
        physicsBody = world.createBody(bodyDef);

        PolygonShape shape = new PolygonShape();
        shape.setAsBox(width/2 / WORLD_TO_SCREEN, height/2 / WORLD_TO_SCREEN);
        Fixture fixture = physicsBody.createFixture(shape, 0.5f);
        shape.dispose();

        return physicsBody;
    }
}
