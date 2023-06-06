import PartOfSpeech from "./PartOfSpeech";

export default function Words() {
  const nouns = ["alambic", "pipette", "coil", "burner", "goggles", "pinafore"];
  const verbs = ["run", "jump", "swim"];
  const adjectives = ["beautiful", "strong", "happy"];
  return (
    <div className="flex ">
      <PartOfSpeech pos="Nouns" data={nouns} />
      <PartOfSpeech pos="Verbs" data={verbs} />
      <PartOfSpeech pos="Adjectives" data={adjectives} />
    </div>
  );
}
