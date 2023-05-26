import { useSelector } from "react-redux";
import { FormationDivBox } from "../styles";

export default function FormationStatistics() {
  const { lineups } = useSelector((state) => state).dashboard;
  return (
    <FormationDivBox>
      <h3 className="formationTitle">Formação mais utilizada na temporada:</h3>
      <div className="formationBorderStyle">
        {lineups?.formation ? (
          <span className="formation">{lineups.formation}</span>
        ) : (
          <span className="formation">Não encontrado.</span>
        )}

        <h3>Quantidade</h3>
        {lineups?.played ? (
          <span className="quantity">{lineups.played}</span>
        ) : (
          <span className="quantity">Não encontrado.</span>
        )}
      </div>
    </FormationDivBox>
  );
}
