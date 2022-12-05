import { useState } from "react";
import { type NextPage } from "next";
import copy from "copy-to-clipboard";

const Home: NextPage = () => {
  const [binary, setBinary] = useState("");
  const [copied, setCopied] = useState(false);

  const isValid = binary.match(/^(0|1)*$/g);
  const decimal = isValid && binary ? parseInt(binary, 2).toString() : "";

  const changeBinary = (newBinary: string) => {
    setBinary(newBinary.substring(0, 16));
  };

  const copyDecimal = () => {
    copy(decimal);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <h1 className="my-2">Bin2Dec</h1>
      <p className="leading-normal">
        The Bin2Dec conversion tool allows you to enter a binary number and get
        a decimal value.
      </p>
      <input
        type="number"
        pattern="[0-9]*"
        className="my-3 w-full max-w-lg rounded border-2 bg-transparent px-2 py-1"
        placeholder="Enter 0 or 1"
        value={binary}
        onChange={(e) => changeBinary(e.target.value)}
      />
      {isValid && binary && (
        <>
          <p className="mb-0 text-green-500">Your decimal:</p>
          <p className="mt-2 mb-8 text-6xl font-medium">{decimal}</p>
          <button
            className="rounded-full bg-green-700 py-2 px-6 transition-all hover:bg-green-800"
            onClick={copyDecimal}
          >
            {copied ? "Copied 📄" : "Click to Copy"}
          </button>
        </>
      )}
      {!isValid && <p className="text-red-500">Only 0 or 1 can be entered</p>}
    </>
  );
};

export default Home;
