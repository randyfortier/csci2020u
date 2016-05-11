package csci2020u.libgdx.samples;

import com.badlogic.gdx.physics.box2d.*;

public class BodyFactory {
    public static Body createBoxBody(World world, int x, int y, int width, int height, boolean isStatic) {
        Body physicsBody;

        // the body definition describes the physical properties of the object

        BodyDef bodyDefinition = new BodyDef();
        // StaticBody -> does not move
        bodyDefinition.type = isStatic ? BodyDef.BodyType.StaticBody : BodyDef.BodyType.DynamicBody;
        bodyDefinition.position.set(Utils.toWorld(x), Utils.toWorld(y));
        // true -> do not rotate (no angular momentum)
        bodyDefinition.fixedRotation = true;
        physicsBody = world.createBody(bodyDefinition);

        // the shape describes the rough appearance of the object (for collisions, and debug drawing)

        PolygonShape shape = new PolygonShape();
        shape.setAsBox(Utils.toWorld(width / 2), Utils.toWorld(height / 2));
        // 1.0f - density (with the size, determines mass of our object)
        Fixture fixture = physicsBody.createFixture(shape, 0.5f);
        shape.dispose();

        return physicsBody;
    }
}
