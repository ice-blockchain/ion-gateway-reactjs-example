import './Application.css';
import {useTonConnectUI, useTonWallet} from '@ion-gateway/ui-react';

export const Wallet = ({ onDisconnect }) => {
    const wallet = useTonWallet();

    return (
        wallet && (
            <div>
                <p><b>Connected wallet address</b>: {wallet.account.address}</p>
                <p><b>Device</b>: {wallet.device.appName}</p>
                <p><b>Connected via</b>: {wallet.provider}</p>
                <button onClick={onDisconnect}>Disconnect</button>
            </div>
        )
    );
};

function Application() {
    const wallet = useTonWallet();
    const [tonConnectUI] = useTonConnectUI();
    console.log(wallet);
    return (
        <header>
            {!wallet && (
                <button onClick={() => tonConnectUI.openModal()}>
                    Connect Wallet
                </button>
            )}
            {wallet && <Wallet onDisconnect={() => tonConnectUI.disconnect()} />}
        </header>
    );
}

export default Application;
