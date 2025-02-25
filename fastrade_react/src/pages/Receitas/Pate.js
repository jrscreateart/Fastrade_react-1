import React, { Component } from 'react';
import Cabecalho from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/Rodape';
import img_pate from '../../assets/img/patealho.png';
import MACARRAOA from '../../assets/img/MACARRAOA.png';
import ARROZC from '../../assets/img/ARROZC.png';
import FEIJAO from '../../assets/img/FEIJAO.png';
import TOMATE from '../../assets/img/TOMATE.png';

import '../../components/rodape/Rodape';

class Pate extends Component {
    render() {
        return (
            <div>
                <Cabecalho />
                <div className="banner_dicas">
                    <p className="titulo_do_prato">RECEITAS</p>
                </div>
                <div className="card_receitas">
                    <div className="foto_receita">
                  <img src={img_pate} alt="imagem pate" className="img_receita" />
                        <div className="nome_prato">
                            <p className="textop">Patê de Alho Poró</p><br />
                        </div>
                    </div>
                    <div className="texto_receita">
                        <br />
                        <br />
                        <h3>INGREDIENTES: </h3><br />
                        <br />
                        <p>
                        Parte verde de pelo menos 3 alhos porós<br />
                        2 dentes de alho<br />
                        Óleo vegetal (usei de girassol)<br />
                        Pimenta do reino em pó a gosto (opcional)<br />
                        Sal a gosto<br />
                        
                            
                        </p>
                        <br />
                        <br />
                        <h3> MODO DE PREPARO: </h3><br />
                        <br />
                        <p>
                        1- Corte a parte verde dos alhos porós e lave bem, pois sempre tem terra 
                        acumulada entre as folhas. Descarte as folhas que estão secas;
                        refogar a cebola no óleo, até dourar.<br />
                        Juntar as folhas picadas e o sal.<br />
                        2- Coloque numa panela de pressão e cubra com água. Adicione sal, 
                        tampe e cozinhe por 15 minutos, contados a partir do momento que a 
                        panela começar a chiar. Quando terminar o tempo, desligue e deixe a pressão <br />
                        3- Abra a panela e deixe a água amornar;<br />
                        4- Em uma frigideira, aqueça o óleo e doure o alho picado; <br />
                        5- Coloque no liquidificador o alho poró, o alho dourado, e o 
                        sal e a pimenta do reino a gosto. Triture tudo até ficar homogêneo, 
                        caso necessário, adicione um pouco da água do cozimento para ajudar 
                        as hélices a triturar. No meu caso não precisei usar.
                      
                        </p>
                        <br />

                    </div>
                </div>
                <div className="embarque">
                    <div className="carrossel">

                        <img className="carrossel_img" src={MACARRAOA} />
                        <img className="carrossel_img" src={ARROZC} />
                        <img className="carrossel_img" src={FEIJAO} />
                        <img className="carrossel_img" src={TOMATE} />

                    </div>
                    <Rodape/>
                </div>
                </div>
                );
            }
        }
              
         export default Pate;