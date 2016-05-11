package csci2020u.libgdx.samples;

public class Utils {
    public static float WORLD_TO_SCREEN = 70;

    public static float toScreen(float worldCoordValue) {
        return worldCoordValue * WORLD_TO_SCREEN;
    }

    public static float toWorld(float screenCoordValue) {
        return screenCoordValue / WORLD_TO_SCREEN;
    }
}
