const contractCompile = require('./contractCompile');
const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3');
const seeds = "bulb light hero agree drip nephew garbage loud plastic exist day peace";
const rinkerby = "https://rinkeby.infura.io/";

const provider = new HDWalletProvider(seeds, rinkerby);
const web3 = new Web3(provider);

const _buyToken = async (_con, _amount) => {
    return new Promise((resolve, reject) => {
        _con.buyToken.sendTransaction(_amount, (err, data) => {
            if (err) resolve(err);
            resolve(data);
        });
    });
}
const _burn = async (_con, _amount) => {
    return new Promise((resolve, reject) => {
        _con.burn.sendTransaction(_amount, (err, data) => {
            if (err) resolve(err);
            resolve(data);
        });
    });
}
const _reward = async (_con) => {
    return new Promise((resolve, reject) => {
        _con.reward.sendTransaction((err, data) => {
            if (err) resolve(err);
            resolve(data);
        });
    });
}
const _getState = async (_con) => {
    return new Promise((resolve, reject) => {
        _con.reward.call((err, data) => {
            if (err) resolve(err);
            resolve(data);
        });
    });
}
const _deposit = async (_con, _message) => {
    return new Promise((resolve, reject) => {
        _con.deposit.sendTransaction(_message, (err, data) => {
            if (err) resolve(err);
            resolve(data);
        });
    });
}
const _getName = async (_con) => {
    return new Promise((resolve, reject) => {
        _con.name.call((err, data) => {
            if (err) resolve(err);
            resolve(data);
        });
    });
}
const _getDecimals = async (_con) => {
    return new Promise((resolve, reject) => {
        _con.decimals.call((err, data) => {
            if (err) resolve(err);
            resolve(data);
        });
    });
}
const _getSymbol = async (_con) => {
    return new Promise((resolve, reject) => {
        _con.symbol.call((err, data) => {
            if (err) resolve(err);
            resolve(data);
        });
    });
}
const _getRating = async (_con) => {
    return new Promise((resolve, reject) => {
        _con.rating.call((err, data) => {
            if (err) resolve(err);
            resolve(data);
        });
    });
}
const _getTotalSupply = async (_con) => {
    return new Promise((resolve, reject) => {
        _con.totalSupply.call((err, data) => {
            if (err) resolve(err);
            resolve(data);
        });
    });
}
const _getCreator = async (_con) => {
    return new Promise((resolve, reject) => {
        _con.creator.call((err, data) => {
            if (err) resolve(err);
            resolve(data);
        });
    });
}
const _getCashier = async (_con) => {
    return new Promise((resolve, reject) => {
        _con.cashier.call((err, data) => {
            if (err) resolve(err);
            resolve(data);
        });
    });
}
const _getBonus = async (_con) => {
    return new Promise((resolve, reject) => {
        _con.bonus.call((err, data) => {
            if (err) resolve(err);
            resolve(data);
        });
    });
}


class DTUContract {
    constructor(_address) {
        this.address = _address;
        this.instance = web3.eth.contract(JSON.parse(contractCompile.interface)).at(_address);
    }
    getAddress() {
        return this.address;
    }
    getInstance() {
        return this.instance;
    }
    buyToken(_amount) {
        _buyToken(this.instance, _amount);
    }
    burn(_amount) {
        _burn(this.instance, _amount);
    }
    reward() {
        _reward(this.instance);
    }
    getState() {
        return _getState(this.instance);
    }
    deposit(_message) {
        _deposit(this.instance, _message);
    }
    getName() {
        return _getName(this.instance);
    }
    getDecimals() {
        return _getDecimals(this.instance);
    }
    getSymbol() {
        return _getSymbol(this.instance);
    }
    getRating() {
        return _getRating(this.instance);
    }
    getTotalSupply() {
        return _getTotalSupply(this.instance);
    }
    getCreator() {
        return _getCreator(this.instance);
    }
    getCashier() {
        return _getCashier(this.instance);
    }
    getBonus() {
        return _getBonus(this.instance);
    }

}
module.exports = DTUContract;