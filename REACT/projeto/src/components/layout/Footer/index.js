import FooterCss from './Footer.module.css';


import pagamento1 from '../../../assets/image 50.svg';
import pagamento2 from '../../../assets/image 51.svg';
import pagamento3 from '../../../assets/image 52.svg';
import pagamento4 from '../../../assets/Mastercard-logo 1.svg';
import pagamento5 from '../../../assets/logo-pix-1920x1080 1.svg';


function Footer() {
    return (
        <footer className={FooterCss.footer}>
            <ul className={FooterCss.navList}></ul>

            <h5 className={FooterCss.paymentTitle}>Formas de pagamento</h5>

            <div className={FooterCss.paymentContainer}>
                <div className={FooterCss.paymentMethods}>
                    <button>
                        <img className={FooterCss.pagamentosgg} src={pagamento4} alt="Método de pagamento 1" />
                    </button>
                    <button>
                        <img className={FooterCss.pagamentosggg} src={pagamento5} alt="Método de pagamento 2" />
                    </button>
                </div>

                {/* Adicionando as 3 imagens no canto direito */}
                <div className={FooterCss.extraImages}>
                    <img className={FooterCss.imagemM} src={pagamento1} alt="Extra 1" />
                    <img className={FooterCss.imagemM} src={pagamento2} alt="Extra 2" />
                    <img className={FooterCss.imagemM} src={pagamento3} alt="Extra 3" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
