import { z } from "zod";
export default function () {
  const schema = z.string();
  try {
    console.log(schema.parse("Hello this was the string"));
    console.log(schema.parse("12"));
  } catch (e) {
    console.log(e);
  }
  return (
    <>
      <p>This is just a paragraph from a forms page</p>
    </>
  );
}
