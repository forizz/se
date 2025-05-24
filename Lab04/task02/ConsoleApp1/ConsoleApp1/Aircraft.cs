namespace ConsoleApp1
{
    public class Aircraft
    {
        public string Name { get; }
        public bool IsTakingOff { get; set; }
        private readonly TrafficMediator _mediator;

        public Aircraft(string name, CommandCentre mediator)
        {
            Name = name;
            _mediator = mediator;
        }

        public void Land()
        {
            _mediator.RequestLanding(this);
        }

        public void TakeOff()
        {
            _mediator.RequestTakeOff(this);
        }
    }
}