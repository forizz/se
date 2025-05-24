namespace ConsoleApp1
{
    public class CommandCentre : TrafficMediator
    {
        private List<Runway> _runways = new List<Runway>();

        public CommandCentre(params Runway[] runways)
        {
            _runways.AddRange(runways);
        }

        public void RequestLanding(Aircraft aircraft)
        {
            Console.WriteLine($"Aircraft {aircraft.Name} is requesting landing.");
            var freeRunway = _runways.FirstOrDefault(r => r.IsFree);

            if (freeRunway != null)
            {
                Console.WriteLine($"Aircraft {aircraft.Name} has landed on Runway {freeRunway.Id}.");
                freeRunway.IsBusyWithAircraft = aircraft;
                freeRunway.HighLightRed();
            }
            else
            {
                Console.WriteLine($"Aircraft {aircraft.Name} cannot land. No free runways.");
            }
        }

        public void RequestTakeOff(Aircraft aircraft)
        {
            Console.WriteLine($"Aircraft {aircraft.Name} is requesting takeoff.");
            var runway = _runways.FirstOrDefault(r => r.IsBusyWithAircraft == aircraft);

            if (runway != null)
            {
                aircraft.IsTakingOff = true;
                runway.IsBusyWithAircraft = null;
                runway.HighLightGreen();
                Console.WriteLine($"Aircraft {aircraft.Name} has taken off from Runway {runway.Id}.");
            }
            else
            {
                Console.WriteLine($"Aircraft {aircraft.Name} is not on any runway.");
            }
        }
    }
}