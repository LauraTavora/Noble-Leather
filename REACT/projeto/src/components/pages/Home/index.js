import searchIcon from './../../../assets/Search (1).svg';
import desktopImage from './../../../assets/Desktop - 6 (3).svg';
import jacketImage from './../../../assets/image (5) (1).svg';
import bagImage from './../../../assets/image (6) (1).svg';
import beltImage from './../../../assets/image (7) (1).svg';
import dailyLifeImage from './../../../assets/Frame 11 (1).svg';
import Style from './Home.module.css'
import { Link } from 'react-router-dom';





function Home() {
    return (
        <>
        {/* <Navbar/> */}
            <header>
                <div className={Style.principal}>
                    <h2>Noble leather</h2>
                    <div className={Style.search_container}>
                        <h2>Buscar</h2>
                        <img src={searchIcon} alt="Ícone de busca" />
                    </div>
                </div>
                <div className={Style.categoria}>
                    <h3><Link to="/Bolsa">Bolsas</Link></h3>
                    <h3><Link to="/jaqueta">Jaquetas</Link></h3>
                    <h3><Link to="/Cinto">Cintos</Link></h3>
                </div>

            </header>

            <main>
                <img className={Style.imagem_tela} src={desktopImage} alt="Imagem principal" />

                <div className={Style.titulos}>
                    <h2>Escolha por Categoria</h2>
                    <h3 className={Style.categoria_subtt}>Escolha seu favorito</h3>
                </div>

                <div className={Style.container_categorias}>
                    <div className={Style.jaquetas}>
                        <img src={jacketImage} alt="Jaquetas" />
                        <p>Jaquetas</p>
                    </div>

                    <div className={Style.bolsas}>
                        <img src={bagImage} alt="Bolsas" />
                        <p>Bolsas</p>
                    </div>

                    <div className={Style.cintos}>
                        <img src={beltImage} alt="Cintos" />
                        <p>Cintos</p>
                    </div>
                </div>

                <div className={Style.titulos_precos}>
                    <h2>Escolher por preço</h2>
                    <h3 className={Style.categoria_subtt_precos}>Encontre o ideal</h3>
                </div>

                <div className={Style.container_precos}>
                    <div className={Style.preco}>
                        <h2>R$ 50,00</h2>
                    </div>
                    <div className={Style.preco}>
                        <h2>R$ 90,00</h2>
                    </div>
                    <div className={Style.preco}>
                        <h2>R$ 120,00</h2>
                    </div>
                    <div className={Style.preco}>
                        <h2>R$ 160,00</h2>
                    </div>
                    <div className={Style.preco}>
                        <h2>R$ 200,00</h2>
                    </div>
                </div>

                <div className={Style.container_fotos}>
                    <h2>Dia a dia com Noble Leather</h2>
                    <div className={Style.imagens}>
                        <img src={dailyLifeImage} alt="Fotos do dia a dia" />
                    </div>
                </div>
            </main>

            {/* <Footer image1={mastercard} image2={}/> */}

        </>
    );
}

export default Home;
