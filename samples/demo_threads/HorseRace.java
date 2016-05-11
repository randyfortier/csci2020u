public final class HorseRace {
    public HorseRace() {
        Thread[] horses = new Thread[5];
        horses[0] = new Thread(new Horse("Man o' War"));
        horses[1] = new Thread(new Horse("Secretariat"));
        horses[2] = new Thread(new Horse("War Admiral"));
        horses[3] = new Thread(new Horse("Seabiscuit"));
        horses[4] = new Thread(new Horse("Peel Jet"));
        
        System.out.println("Ready...\nSet...\nGo!");
        for (int i = 0; i < horses.length; i++) {
            horses[i].start();
            //horses[i].run();
        }
        System.out.println("The race is over!");
    }
    
    public static void main(String[] args) {
        HorseRace horseRace = new HorseRace();
    }
    
    class Horse implements Runnable {
        final int ITERATIONS = 1000000000;
        
        private String name;
        
        public Horse(String name) {
            this.name = name;
        }
        
        public String getName() {
            return name;
        }
        
        public void run() {
            for (int i = 0; i < ITERATIONS; i++) {
                if ((i % 100000000) == 0) {
                    System.out.println(getName() + 
                                       " distance: " + 
                                       (i/10000000) + 
                                       "m");
                }
            }
            System.out.println(getName() + " has finished.");
        }
    }
}