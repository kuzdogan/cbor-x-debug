const { arrayify } = require("@ethersproject/bytes");
const { decode } = require("cbor-x");

const auxdata =
  "9092526040019020548390611e32565b91508061243781612f99565b9150506122fa565b50600c54600d5461244f91611d1f565b82101561246657600d54600c549350935050509091565b90939092509050565b60008060008061247e85612b29565b9050600061248b86612b46565b905060006124a38261249d8986611e32565b90611e32565b979296509094509092505050565b60008080806124c08886611c9d565b905060006124ce8887611c9d565b905060006124dc8888611c9d565b905060006124ee8261249d8686611e32565b939b939a50919850919650505050505050565b604080516002808252606082018352600092602083019080368337019050509050308160008151811061253657612536612f44565b6001600160a01b03928316602091820292909201810191909152601b54604080516315ab88c960e31b81529051919093169263ad5c46489260048083019391928290030181865afa15801561258f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125b39190612ffe565b816001815181106125c6576125c6612f44565b6001600160a01b039283166020918202929092010152601b546125ec913091168461180d565b601b5460405163791ac94760e01b81526001600160a01b039091169063791ac9479061262590859060009086903090429060040161301b565b600060405180830381600087803b15801561263f57600080fd5b505af1158015611c5b573d6000803e3d6000fd5b601b5461266b9030906001600160a01b03168461180d565b601b54601e5460405163f305d71960e01b81523060048201526024810185905260006044820181905260648201526001600160a01b0391821660848201524260a482015291169063f305d71990839060c40160606040518083038185885af11580156126db573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190612700919061308c565b5050505050565b602b54610100900460ff161561276b5760405162461bcd60e51b815260206004820152602360248201527f4c697175696469747920616c726561647920616464656420616e64206d61726b60448201526232b21760e91b6064820152608401610930565b6127758282611e74565b15801561278f5750601c546001600160a01b038281169116145b15610dc7576001600160a01b03821660009081526008602052604090819020805460ff19166001908117909155602b805461ff00191661010017905543602c5542602d55601f805460ff60a81b1916600160a81b17905590517f53726dfcaf90650aa7eb35524f4d3220f07413c8d6cb404cc8c18bf5591bc1599161281991901515815260200190565b60405180910390a15050565b6011541580156128355750601454155b1561283c57565b6011805460125560148054601555601780546018556000928390559082905555565b60008060008060008061287087611de3565b6001600160a01b038f16600090815260016020526040902054959b509399509197509550935091506128a29087611e32565b6001600160a01b03808b1660009081526001602052604080822093909355908a16815220546128d19086611d84565b6001600160a01b03808a16600090815260016020908152604080832094909455918c1681526005909152205460ff16801561292557506001600160a01b03881660009081526005602052604090205460ff16155b1561296b576001600160a01b03891660009081526002602052604090205461294d9088611e32565b6001600160a01b038a16600090815260026020526040902055612aa3565b6001600160a01b03891660009081526005602052604090205460ff161580156129ac57506001600160a01b03881660009081526005602052604090205460ff165b156129f2576001600160a01b0388166000908152600260205260409020546129d49084611d84565b6001600160a01b038916600090815260026020526040902055612aa3565b6001600160a01b03891660009081526005602052604090205460ff168015612a3257506001600160a01b03881660009081526005602052604090205460ff165b15612aa3576001600160a01b038916600090815260026020526040902054612a5a9088611e32565b6001600160a01b03808b1660009081526002602052604080822093909355908a1681522054612a899084611d84565b6001600160a01b0389166000908152600260205260409020555b8015612ab357612ab38982612b6f565b6000841180612ac25750600082115b15612ad157612ad18483612c39565b876001600160a01b0316896001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef85604051612b1691815260200190565b60405180910390a3505050505050505050565b60006109f0601a54610ab160115485611c9d90919063ffffffff16565b60006109f0601a54610ab1612b68601754601454611d8490919063ffffffff16565b8590611c9d565b6000612b79611d61565b90506000612b878383611c9d565b30600090815260016020526040902054909150612ba49082611d84565b3060009081526001602090815260408083209390935560059052205460ff1615612bf35730600090815260026020526040902054612be29084611d84565b306000908152600260205260409020555b60405183815230906001600160a01b038616907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a350505050565b600d54612c469083611e32565b600d55600e54612c569082611d84565b600e555050565b600060208284031215612c6f57600080fd5b5035919050565b600060208083528351808285015260005b81811015612ca357858101830151858201604001528201612c87565b506000604082860101526040601f19601f8301168501019250505092915050565b6001600160a01b0381168114612cd957600080fd5b50565b60008060408385031215612cef57600080fd5b8235612cfa81612cc4565b946020939093013593505050565b600060208284031215612d1a57600080fd5b8135610b5181612cc4565b600080600060608486031215612d3a57600080fd5b8335612d4581612cc4565b92506020840135612d5581612cc4565b929592945050506040919091013590565b60008060408385031215612d7957600080fd5b50508035926020909101359150565b60008083601f840112612d9a57600080fd5b50813567ffffffffffffffff811115612db257600080fd5b6020830191508360208260051b8501011115612dcd57600080fd5b9250929050565b60008060008060408587031215612dea57600080fd5b843567ffffffffffffffff80821115612e0257600080fd5b612e0e88838901612d88565b90965094506020870135915080821115612e2757600080fd5b50612e3487828801612d88565b95989497509550505050565b80358015158114612e5057600080fd5b919050565b60008060408385031215612e6857600080fd5b82359150612e7860208401612e40565b90509250929050565b600060208284031215612e9357600080fd5b610b5182612e40565b60008060408385031215612eaf57600080fd5b8235612eba81612cc4565b91506020830135612eca81612cc4565b809150509250929050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600181811c90821680612f1e57607f821691505b602082108103612f3e57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b818103818111156109f0576109f0612f5a565b634e487b7160e01b600052603160045260246000fd5b600060018201612fab57612fab612f5a565b5060010190565b808201808211156109f0576109f0612f5a565b80820281158282048414176109f0576109f0612f5a565b600082612ff957634e487b7160e01b600052601260045260246000fd5b500490565b60006020828403121561301057600080fd5b8151610b5181612cc4565b600060a082018783526020878185015260a0604085015281875180845260c086019150828901935060005b8181101561306b5784516001600160a01b031683529383019391830191600101613046565b50506001600160a01b03969096166060850152505050608001529392505050565b6000806000606084860312156130a157600080fd5b835192506020840151915060408401519050925092509256fe45524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa264697066735822122048f0ff74cd544a5293bd36dd28c3b8d1ad66d1f546099293798ae2944a60b7de64736f6c63430008120033f652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c";

const arrayified = arrayify("0x" + auxdata);

try {
  const data = decode(arrayified);
  console.log(JSON.stringify(data, null, 2));
} catch (e) {
  console.log(e);
  console.log("Auxdata is not a valid CBOR object");
}
