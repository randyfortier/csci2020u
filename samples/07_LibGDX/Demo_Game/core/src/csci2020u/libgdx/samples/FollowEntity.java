package csci2020u.libgdx.samples;

import com.badlogic.gdx.ai.steer.SteerableAdapter;
import com.badlogic.gdx.ai.steer.SteeringAcceleration;
import com.badlogic.gdx.ai.steer.SteeringBehavior;
import com.badlogic.gdx.math.Vector2;
import com.badlogic.gdx.physics.box2d.Body;

public class FollowEntity extends SteerableAdapter {
    private Body body = null;
    private float boundingRadius = 0f;
    private float maxLinearSpeed, maxLinearAcceleration;
    private SteeringBehavior<Vector2> behaviour;
    private SteeringAcceleration<Vector2> steeringOutput;

    public FollowEntity(Body body, float boundingRadius) {
        this.body = body;
        this.boundingRadius = boundingRadius;

        this.maxLinearSpeed = 100;
        this.maxLinearAcceleration = 500;

        this.steeringOutput = new SteeringAcceleration<Vector2>(new Vector2());
        this.body.setUserData(this);
    }

    public void update(float deltaT) {
        if (behaviour != null) {
            behaviour.calculateSteering(steeringOutput);

            if (!steeringOutput.linear.isZero()) {
                Vector2 linearForce = steeringOutput.linear.scl(deltaT);
                body.applyForceToCenter(linearForce, true);

                // limit to maxLinearSpeed
                Vector2 velocity = body.getLinearVelocity();
                float speed = velocity.len2();
                if (speed > maxLinearSpeed) {
                    body.setLinearVelocity(velocity.scl(maxLinearSpeed/speed));
                }
            }
        }
    }

    public void setBehaviour(SteeringBehavior<Vector2> behaviour) {
        this.behaviour = behaviour;
    }

    public SteeringBehavior<Vector2> getBehavior() {
        return behaviour;
    }

    public Body getBody() {
        return body;
    }

    @Override
    public Vector2 getLinearVelocity() {
        return body.getLinearVelocity();
    }

    @Override
    public float getAngularVelocity() {
        return body.getAngularVelocity();
    }

    @Override
    public float getMaxLinearSpeed() {
        return maxLinearSpeed;
    }

    @Override
    public void setMaxLinearSpeed(float speed) {
        maxLinearSpeed = speed;
    }

    @Override
    public float getMaxLinearAcceleration() {
        return maxLinearAcceleration;
    }

    @Override
    public void setMaxLinearAcceleration(float accel) {
        maxLinearAcceleration = accel;
    }

    @Override
    public Vector2 getPosition() {
        return body.getPosition();
    }

    @Override
    public float getOrientation() {
        return body.getAngle();
    }
}
