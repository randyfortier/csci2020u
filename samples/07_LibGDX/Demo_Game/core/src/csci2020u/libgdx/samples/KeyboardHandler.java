package csci2020u.libgdx.samples;

import com.badlogic.gdx.Input;
import com.badlogic.gdx.InputProcessor;
import com.badlogic.gdx.controllers.Controller;
import com.badlogic.gdx.controllers.ControllerListener;
import com.badlogic.gdx.controllers.Controllers;
import com.badlogic.gdx.controllers.PovDirection;
import com.badlogic.gdx.math.Vector3;

public class KeyboardHandler implements InputProcessor {
    private boolean useController = false;
    private float controllerAxisThreshold = 0.1f;
    private SampleGame game = null;

    public KeyboardHandler(SampleGame game) {
        this.game = game;
    }

    @Override
    public boolean keyDown(int keycode) {
        if (keycode == Input.Keys.LEFT) {
            game.moveLeft();
        } else if (keycode == Input.Keys.RIGHT) {
            game.moveRight();
        }

        if (keycode == Input.Keys.SPACE) {
            game.jump();
        }
        return false;
    }

    @Override
    public boolean keyUp(int keycode) {
        if ((keycode == Input.Keys.LEFT) || (keycode == Input.Keys.RIGHT)) {
            game.stopMoving();
        }
        return false;
    }

    @Override
    public boolean keyTyped(char character) {
        return false;
    }

    @Override
    public boolean touchDown(int screenX, int screenY, int pointer, int button) {
        return false;
    }

    @Override
    public boolean touchUp(int screenX, int screenY, int pointer, int button) {
        return false;
    }

    @Override
    public boolean touchDragged(int screenX, int screenY, int pointer) {
        return false;
    }

    @Override
    public boolean mouseMoved(int screenX, int screenY) {
        return false;
    }

    @Override
    public boolean scrolled(int amount) {
        return false;
    }
}
