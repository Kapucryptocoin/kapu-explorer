import { Network, NetworkConfig } from './models/network-config.model';
import { environment } from '../environments/environment';

const mainNet: Network = {
  name: 'MAINNET',
  displayName: 'Mainnet',
  node: 'https://api.kapunode.net/api',
  nethash: '313ea34c8eb705f79e7bc298b788417ff3f7116c9596f5c9875e769ee2f4ede1',
  currencies: ['KAPU', 'BTC', 'USD', 'EUR', 'GBP', 'CNY', 'KRW'],
  knownAddresses: {
    'KDn3WyMCHzfhtpzaiUmb4GJLyFPrcaF5Kn': 'Reserve',
    'KJQNgePukpFY3dzT5SVibF57TdFYtgw6qA': 'ARK Team'
  },
  properties: {}
};

const devNet: Network = {
  name: 'DEVNET',
  displayName: 'Devnet',
  node: 'https://dexplorer.ark.io:8443/api',
  nethash: '578e820911f24e039733b45e4882b73e301f813a0d2c31330dafda84534ffa23',
  currencies: ['DARK'],
  knownAddresses: {},
  properties: {
    disablePriceApi: true
  }
};

export const CONFIG: NetworkConfig = {
  activeNetwork: environment.production ? mainNet : devNet,
  availableNetworks: [mainNet, devNet]
};
