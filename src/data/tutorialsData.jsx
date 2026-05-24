import { tutorialsInfo } from "./tutorialsInfo";
import { translate } from "../i18n";

// Mantem apenas metadados. Os componentes completos dos artigos ficam em
// tutorialComponents.jsx para nao entrar no bundle da Home/listagem.
export const getTutoriais = (language = "pt-BR") =>
  tutorialsInfo.map((tutorial) => {
    const localizedInfo = translate(language, `tutorials.info.${tutorial.slug}`);

    return {
      ...tutorial,
      ...(typeof localizedInfo === "object" ? localizedInfo : {}),
    };
  });

export const tutoriais = getTutoriais();
