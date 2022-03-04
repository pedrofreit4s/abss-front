import { Apresentation, ApresentationCover, ApresentationImage, ApresentationTexts, Button, Buttons, MessageImage, MessageImageTexts, MessageText } from "./styles/home";
import Header from "../../shared/components/Header";
import Container from "../../shared/components/Container";
import Image from "../../shared/assets/ihvi.png";
import Team from "../../shared/assets/team-01.jpg";
import Message from "../../shared/components/Message";
import CardStatus from "../../shared/components/CardStatus";

export default function HomePage() {
  return (
    <>
      <Container>
        <Header />
        <Apresentation>
          <ApresentationTexts>
            <h3>Descubra mais sobre quem nós somos!</h3>
            <p>
              A ABSS (Associação Brasileira de Startups de Saúde) nasceu após o encontro de alguns dos empreendedores brasileiros que resolveram desbravar o início das HealthTechs no Brasil.
              {/* <br /> */}
              {/* Assistimos e vivemos muitas dificuldades que sempre eram alicerçadas na desconfiança dos tradicionais, na falta de investimento e apoio adequado e na legislação que nos engessa. */}
            </p>
            <Buttons>
              <Button>
                Veja nossos associados <i className="bx bxs-user"></i>
              </Button>
              <Button subscribe>
                Inscrever minha startup{" "}
                <div>
                  <i className="bx bxs-chevron-right"></i>
                </div>
              </Button>
            </Buttons>
          </ApresentationTexts>
          <ApresentationCover>
            <ApresentationImage src={Image} />
          </ApresentationCover>
        </Apresentation>
      </Container>
      <Message top={true} message="Somos a Associação Brasileira de Startups de Saúde, e representamos todas as startups, de todos os estágios, que atuam em todas as áreas de promoção e cuidado da saúde no Brasil.">
        <Container>
          <MessageText>
            A ABSS (Associação Brasileira de Startups de Saúde) nasceu após o encontro de alguns dos empreendedores brasileiros que resolveram desbravar o início das HealthTechs no Brasil.
            <br />
            <br />
            Assistimos e vivemos muitas dificuldades que sempre eram alicerçadas na desconfiança dos tradicionais, na falta de investimento e apoio adequado e na legislação que nos engessa.
            <br />
            <br />
            Lá em 2016 resolvemos unir forças para ajudar àqueles que precisam de apoio para desenvolver a vocação de empreendedor. Foi quando esse grupo de promissores empreendedores fixaram os primeiros alicerces da ABSS, sob o comando do Bruno Lagoeiro (PEBMED/Whitebook) e
            Diógenes "Doc" Silva (Anestech).
            <br />
            <br />
            Em 2019 com as mudanças no cenário de inovação em saúde cada vez mais aceleradas, e a necessidade de restaurar a força da associação, as empreendedoras 'cariocas' Ihvi Aidukaitis (Receita Digital) e Claudia Amaral (Remedin), assumiram a presidência da associação,
            junto com Flávio Camilo, da Rocket Studio, que assumiu a Diretoria de Operações, com a missão de levar esse legado adiante.
            <br />
            <br />
            Em 25 de novembro de 2021 foi eleita a nova diretoria executiva, com a escolha do biomédico, professor, apresentador de TV e empreendedor na startup AtendeDoc, o paranaense Cristiano Teodoro Russo como Presidente. Acompanha, como Vice-Presidente, a carioca Emanuela
            Rainho Fontes, profissional de marketing e empreendedora, com atuação nas empresas Move2Care e UXMed. Completando a diretoria, assumiu como Diretora Operacional a empreendedora nascida na Bahia, mas erradicada em Niterói/RJ, Helen Pitangueira Guedes Mazarakis,
            fundadora e CEO da UXMed.
            <br />
            <br />
            Toda a diretoria eleita tinha atuação ativa como embaixadores e membros dos GT's no mandato da diretoria anterior e dará continuidade ao trabalho desempenhado até aquela data, levando a ABSS a um novo patamar!
            <br />
            <br />
            <strong>E aqui estamos.</strong>
          </MessageText>
          <div className="row mt-5 align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <MessageImage src={Team} alt="Imagem da equipe" />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <MessageImageTexts>
                <h3>1a reunião</h3>
                <MessageText>Reunião dos fundadores e primeira diretoria da ABSS - 2016. Presentes grandes startups do cenário atual. A partir da esquerda: Medicinia, iClinic, MEMED, PEBMED, Anestech, Medicinae.</MessageText>
              </MessageImageTexts>
            </div>
          </div>
        </Container>
      </Message>
      <Container>
        <div className="row mb-5">
          <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
            <CardStatus icon={<i className="bx bxs-buildings"></i>} title="1234" text="Startus cadastradas" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
            <CardStatus icon={<i className="bx bxs-hand"></i>} title="1234" text="Nossos parceiros" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
            <CardStatus icon={<i className="bx bxs-user"></i>} title="1234" text="Membros da equipe" />
          </div>
        </div>
      </Container>
    </>
  );
}
