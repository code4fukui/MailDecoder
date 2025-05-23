import { QuotedPrintable } from "https://code4fukui.github.io/QuotedPrintable/QuotedPrintable.js";
import { JIS } from "https://code4fukui.github.io/JIS/JIS.js";

//console.log(QuotedPrintable.encode(JIS.encode("TO:福井")));
//console.log(JIS.decode(QuotedPrintable.decode("TO:=1B$BJ!0f=1B(B")));

export const decode = (s) => {
  return JIS.decode(QuotedPrintable.decode(s));
};

export const encode = (s) => {
  return QuotedPrintable.encode(JIS.encode(s));
};

export const Mail = { encode, decode };
