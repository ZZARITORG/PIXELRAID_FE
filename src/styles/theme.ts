export interface DefaultTheme {
  color: {
    neutral: {
      B40: string;
      B30: string;
      B20: string;
      B10: string;
      B00: string;
      white: string;
      black: string;
    };
    primary: {
      P00: string;
    };
    warning: {
      R00: string;
    };
  };
  typography: {
    [key in TypographyKey]: {
      fontSize: string;
      fontWeight: number;
    };
  };
}

export type TypographyKey =
  | `title1-${1 | 2 | 3}`
  | `body1-${1 | 2 | 3}`
  | `body2-${1 | 2 | 3}`
  | `body3-${1 | 2 | 3}`
  | `small1-${1 | 2 | 3}`
  | `small2-${1 | 2 | 3}`;

const theme: DefaultTheme = {
  color: {
    neutral: {
      B40: "#555555",
      B30: "#656565",
      B20: "#999999",
      B10: "#DDDDDD",
      B00: "#EEEEEE",
      white: "#FFFFFF",
      black: "#000000",
    },
    primary: {
      P00: "#DB564C",
    },
    warning: {
      R00: "#FF0000",
    },
  },

  typography: {
    // Title (20px)
    "title1-1": { fontSize: "20px", fontWeight: 700 }, // Bold
    "title1-2": { fontSize: "20px", fontWeight: 600 }, // SemiBold
    "title1-3": { fontSize: "20px", fontWeight: 500 }, // Medium

    // Body1 (18px)
    "body1-1": { fontSize: "18px", fontWeight: 700 },
    "body1-2": { fontSize: "18px", fontWeight: 600 },
    "body1-3": { fontSize: "18px", fontWeight: 500 },

    // Body2 (16px)
    "body2-1": { fontSize: "16px", fontWeight: 700 },
    "body2-2": { fontSize: "16px", fontWeight: 600 },
    "body2-3": { fontSize: "16px", fontWeight: 500 },

    // Body3 (14px)
    "body3-1": { fontSize: "14px", fontWeight: 700 },
    "body3-2": { fontSize: "14px", fontWeight: 600 },
    "body3-3": { fontSize: "14px", fontWeight: 500 },

    // Small1 (12px)
    "small1-1": { fontSize: "12px", fontWeight: 700 },
    "small1-2": { fontSize: "12px", fontWeight: 600 },
    "small1-3": { fontSize: "12px", fontWeight: 500 },

    // Small2 (10px)
    "small2-1": { fontSize: "10px", fontWeight: 700 },
    "small2-2": { fontSize: "10px", fontWeight: 600 },
    "small2-3": { fontSize: "10px", fontWeight: 500 },
  },
};

export type ColorType = typeof theme.color;
export type ColorKeyType = keyof ColorType;

export type NeutralType = typeof theme.color.neutral;
export type NeutralKeyType = keyof NeutralType;

export type PrimaryType = typeof theme.color.primary;
export type PrimaryKeyType = keyof PrimaryType;

export type WarningType = typeof theme.color.warning;
export type WarningKeyType = keyof WarningType;

export type TypographyType = typeof theme.typography;
export type TypographyKeyType = keyof TypographyType;

export default theme;
