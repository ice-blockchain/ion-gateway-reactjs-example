import './Application.css';
import {useTonConnectUI, useTonWallet} from '@ion-gateway/ui-react';

export const Wallet = ({onDisconnect, onTransact}) => {
    const wallet = useTonWallet();

    return (
        wallet && (
            <div>
                <p><b>Connected wallet address</b>: {wallet.account.address}</p>
                <p><b>Device</b>: {wallet.device.appName}</p>
                <p><b>Connected via</b>: {wallet.provider}</p>
                <button onClick={onDisconnect}>Disconnect</button>
                <button onClick={onTransact}>Transact</button>
            </div>
        )
    );
};

function Application() {
    const wallet = useTonWallet();
    const [tonConnectUI] = useTonConnectUI();

    // Example transaction handler
    const handleTransact = async () => {
        try {
            await tonConnectUI.sendTransaction({
                validUntil: Math.floor(Date.now() / 1000) + 300, // expires in 5 mins
                messages: [
                    {
                        address: 'UQAYJcVTvGftTa_-eJySH_7H4wBe-IzjtY9OWnOvbc0I1Iel',
                        amount: '1000000',
                    }
                ],
            });
            console.log('Transaction sent successfully!');
        } catch (err) {
            console.error('Transaction error:', err);
        }
    };

    return (
        <header>
            {!wallet && (
                <button onClick={() => tonConnectUI.openModal()}>
                    Connect Wallet
                </button>
            )}
            {wallet && (
                <Wallet
                    onDisconnect={() => tonConnectUI.disconnect()}
                    onTransact={handleTransact}
                />
            )}
        </header>
    );
}

export default Application;
