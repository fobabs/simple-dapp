const MoodContractAddress = "0x90e4ee69E44701a234704C8574d882CFC3Ec0cE5";
const MoodContractABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_mood",
        type: "string",
      },
    ],
    name: "setMood",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMood",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const provider = new ethers.providers.Web3Provider(window.ethereum, "goerli");

let MoodContract;
// let signer;

// provider.send("eth_requestAccounts", []).then(() => {
//   provider.listAccounts().then((accounts) => {
//     signer = provider.getSigner(accounts[0]);
//     MoodContract = new ethers.Contract(
//       MoodContractAddress,
//       MoodContractABI,
//       signer
//     );
//   });
// });

async function web3Provider() {
  await provider.send("eth_requestAccounts", []);
  const accounts = await provider.listAccounts();
  const signer = provider.getSigner(accounts[0]);
  MoodContract = new ethers.Contract(
    MoodContractAddress,
    MoodContractABI,
    signer
  );
}

web3Provider();

async function getMood() {
  const Mood = await MoodContract.getMood();
  console.log(Mood);
}

async function setMood() {
  const mood = document.getElementById("mood").value;
  await MoodContract.setMood(mood);
}
