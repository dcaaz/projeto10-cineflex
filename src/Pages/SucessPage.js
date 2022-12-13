import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

export default function SucessPage() {
    const location = useLocation();

    return (
        <>
            <Choice>
                <h1>Pedido feito com sucesso!</h1>
            </Choice>

            <Confirm data-identifier="movie-session-infos-reserve-finished">

                <Top>
                    <h1>Filme e sessão</h1>
                </Top>
                <Dice>
                    <h1>{location.state.movie}</h1>
                    <h1>{location.state.hour.day.date} {location.state.hour.name}</h1>
                </Dice>

                <Top>
                    <h1>Ingressos</h1>
                </Top>
                <Dice data-identifier="seat-infos-reserve-finished">
                    {location.state.number.map((i, indice) =>
                        <h1 key={indice}>
                            Assento {i}
                        </h1>)}
                </Dice>

                <Top data-identifier="buyer-infos-reserve-finished">
                    <h1>Comprador</h1>
                </Top>
                <Dice>
                    <h1>Nome: {location.state.name}</h1>
                    <h1>Cpf: {location.state.cpf}</h1>
                </Dice>

            </Confirm>

            <Home>
                <Link to="/">
                    <button data-identifier="back-to-home-btn">
                        <h1>Voltar pra home </h1>
                    </button>
                </Link>
            </Home>
        </>
    )
}

const Choice = styled.div`
            height: 110px;
            display: flex;
            align-items: center;
            justify-content: center;
            h1{
            font-style: bold;
            font-weight: 700;
            font-size: 24px;
            line-height: 28px;
            line-height: 100%;
            color: #7068FF;
            }
`

const Confirm = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 62px
`

const Top = styled.div`
        font-style: bold;
        font-size: 24px;
        line-height: 28px;
        line-height: 100%;
        font-weight: 700;
        margin-top: 16px;
`

const Dice = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
        h1 {
            font-size: 22px;
            line-height: 26px;
            line-height: 100%;
            font-weight: 400;
            margin-top: 10px;
            color: #293845;
        }
`

const Home = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    button{
        width: 225px;
        height: 42px;
        border-radius: 3px;
        border-style: solid;
        border-color: #7745FF;
        background-color: #A09AFF;
    }
    h1 {
        font-size: 18px;
        line-height: 21px;
        line-height: 100%;
        font-weight: 400;
        color: #FFFFFF;
    }
`