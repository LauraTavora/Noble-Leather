import FooterCss from './Footer.module.css';

function Footer() {
    return (
        <footer className={FooterCss.footer}>
            <ul className={FooterCss.navList}>
                <li>Sobre nós</li>
                <li>Nossos produtos</li>
                <li>Contato</li>
            </ul>

            <h5 className={FooterCss.paymentTitle}>Formas de pagamento</h5>

            <div className={FooterCss.paymentMethods}>
                <button>
                    <img className={FooterCss.pagamentosgg} src="" alt="Método de pagamento 1" />
                </button>
                <button>
                    <img className={FooterCss.pagamentosggg} src="" alt="Método de pagamento 2" />
                </button>
            </div>
        </footer>
    );
}

export default Footer;
