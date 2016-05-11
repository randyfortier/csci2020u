package csci2020u.libgdx.samples;

import com.badlogic.gdx.Input;
import com.badlogic.gdx.InputProcessor;

public class KeyboardHandler implements InputProcessor {
    private SampleGame game;

    public KeyboardHandler(SampleGame game) {
        this.game = game;
    }

    @Override
    public boolean keyDown(int keycode) {
        if (keycode == Input.Keys.LEFT) {
            // move left
            game.moveLeft();
        } else if (keycode == Input.Keys.RIGHT) {
            // move right
            game.moveRight();
        } else if (keycode == Input.Keys.SPACE) {
            // jump
            game.jump();
        }
        return false;
    }

    @Override
    public boolean keyUp(int keycode) {
        if ((keycode == Input.Keys.RIGHT) || (keycode == Input.Keys.LEFT)) {
            // stop moving (left/right)
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
        // jump
        game.jump();
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
