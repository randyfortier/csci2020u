public final class HorseRace {
	public HorseRace() {
		Horse[] horses = new Horse[4];
		String[] names = new String[] {"Man o' War", "Secretariat", "War Admiral", "Seabiscuit"};
		for (int i = 0; i < horses.length; i++) {
			horses[i] = new Horse(names[i]);
		}
		
		System.out.println("Ready...");
		System.out.println("Set...");
		System.out.println("Go!!!");
		for (int i = 0; i < horses.length; i++) {
			horses[i].start();
		}
	}
	
	class Horse extends Thread {
		public Horse(String name) {
			super(name);
		}
		
		public void run() {
			int ITERATIONS = 1000000000;
			for (int i = 0; i < ITERATIONS; i++) {
				if ((i % 100000000) == 0) {
					System.out.println(getName() + ":" + (i/10000000) + "m");
				}
			}
			System.out.println(getName() + ": Finished!");
		}
	}

	public static void main(String[] args) {
		HorseRace race = new HorseRace();
	}
}