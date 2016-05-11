package csci2020u.libgdx.samples;

import com.badlogic.gdx.controllers.Controller;
import com.badlogic.gdx.controllers.ControllerListener;
import com.badlogic.gdx.controllers.Controllers;
import com.badlogic.gdx.controllers.PovDirection;
import com.badlogic.gdx.math.Vector3;

public class ControllerHandler implements ControllerListener {
    private boolean useController = false;
    private float controllerAxisThreshold = 0.1f;
    private SampleGame game = null;

    public ControllerHandler(SampleGame game) {
        this.game = game;

        if(Controllers.getControllers().size == 0) {
            useController = false;
        }
    }

    @Override
    public void connected(Controller controller) {
        useController = true;
    }

    @Override
    public void disconnected(Controller controller) {
        useController = false;
    }

    @Override
    public boolean buttonDown(Controller controller, int buttonCode) {
        if (buttonCode == 0) {
            game.jump();
        }
        return false;
    }

    @Override
    public boolean buttonUp(Controller controller, int buttonCode) {
        return false;
    }

    @Override
    public boolean axisMoved(Controller controller, int axisCode, float value) {
        if (axisCode == 1) {
            if (value < -controllerAxisThreshold) {
                game.moveLeft();
            } else if (value > controllerAxisThreshold) {
                game.moveRight();
            } else {
                game.stopMoving();
            }
        }
        return false;
    }

    @Override
    public boolean povMoved(Controller controller, int povCode, PovDirection value) {
        if (value == PovDirection.west) {
            game.moveLeft();
        } else if (value == PovDirection.east) {
            game.moveRight();
        } else {
            game.stopMoving();
        }
        return false;
    }

    @Override
    public boolean xSliderMoved(Controller controller, int sliderCode, boolean value) {
        return false;
    }

    @Override
    public boolean ySliderMoved(Controller controller, int sliderCode, boolean value) {
        return false;
    }

    @Override
    public boolean accelerometerMoved(Controller controller, int accelerometerCode, Vector3 value) {
        return false;
    }
}
