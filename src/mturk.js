import AWS from 'aws-sdk';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mturkAccountBalance: null,
    };
  }
  render() {
    var accountBalanceToDisplay = 'loading...';
    if (this.state.mturkAccountBalance != null) {
      accountBalanceToDisplay = this.state.mturkAccountBalance;
    }

    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to my MTurk application</h1>
        </header>
        <p className='App-intro'>
          Your account balance is {accountBalanceToDisplay}
        </p>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mturkAccountBalance: null,
    };
  }

  componentDidMount() {
    this.getAccountBalance();
  }

  getAccountBalance() {
    AWS.config.update({
      accessKeyId: 'YOUR_ACCESS_KEY_HERE',
      secretAccessKey: 'YOUR_SECRET_KEY_HERE',
      region: 'us-east-1',
    });

    const mTurkClient = new AWS.MTurk();
    mTurkClient.getAccountBalance((err, data) => {
      if (err) {
        console.warn('Error making the mTurk API call:', err);
      } else {
        // The call was a success
        const balance = `$${data.AvailableBalance}`;
        this.setState({ mturkAccountBalance: balance });
      }
    });
  }
  render() {
    var accountBalanceToDisplay = 'loading...';
    if (this.state.mturkAccountBalance != null) {
      accountBalanceToDisplay = this.state.mturkAccountBalance;
    }

    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to my MTurk application</h1>
        </header>
        <p className='App-intro'>
          Your MTurk Requester account balance is {accountBalanceToDisplay}
        </p>
      </div>
    );
  }
}

AWS.config.update({
  accessKeyId: 'YOUR_ACCESS_KEY_HERE',
  secretAccessKey: 'YOUR_SECRET_KEY_HERE',
  region: 'us-east-1',
  endpoint: 'https://mturk-requester-sandbox.us-east-1.amazonaws.com',
});
