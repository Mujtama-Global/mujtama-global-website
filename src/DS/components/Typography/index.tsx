import { FontWeight, TextColor, TextSize } from "@/DS/types/Typography";
import s from "./Typography.module.scss";

const Typography = ({
  color = TextColor.Default,
  label,
  size = TextSize.Base,
  fontWeight = FontWeight.Normal,
  style,
}: {
  label: string;
  size?: TextSize;
  color?: TextColor;
  style?: React.CSSProperties;
  fontWeight?: FontWeight;
}) => {
  let fontSizeClass;
  let colorClass;
  let fontWeightClass;
  switch (fontWeight) {
    case FontWeight.Light:
      fontWeightClass = s.fontLight;
      break;
    case FontWeight.Normal:
      fontWeightClass = s.fontNormal;
      break;
    case FontWeight.Medium:
      fontWeightClass = s.fontMedium;
      break;
    case FontWeight.SemiBold:
      fontWeightClass = s.fontSemiBold;
      break;
    case FontWeight.Bold:
      fontWeightClass = s.fontBold;
      break;
    default:
      fontWeightClass = s.fontNormal;
  }
  switch (color) {
    case TextColor.Default:
      colorClass = s.textDefault;
      break;
    case TextColor.Light:
      colorClass = s.textLight;
      break;
    case TextColor.Primary:
      colorClass = s.textPrimary;
      break;
    case TextColor.Secondary:
      colorClass = s.textSecondary;
      break;
    case TextColor.Tertiary:
      colorClass = s.textTertiary;
      break;
    case TextColor.Accent:
      colorClass = s.textAccent;
      break;
    case TextColor.Warning:
      colorClass = s.textWarning;
      break;
    case TextColor.Error:
      colorClass = s.textError;
      break;
    case TextColor.Success:
      colorClass = s.textSuccess;
      break;
    default:
      colorClass = s.textDefault;
  }
  switch (size) {
    case TextSize.Small:
      fontSizeClass = s.textSm;
      break;
    case TextSize.Medium:
      fontSizeClass = s.textBase;
      break;
    case TextSize.Large:
      fontSizeClass = s.textLg;
      break;
    case TextSize.ExtraLarge:
      fontSizeClass = s.textXl;
      break;
    case TextSize.DoubleExtraLarge:
      fontSizeClass = s.text2xl;
      break;
    default:
      fontSizeClass = s.textBase;
  }
  console.log("style", style);
  return (
    <p
      className={[fontSizeClass, colorClass, fontWeightClass].join(" ")}
      style={{ ...style }}
    >
      {label}
    </p>
  );
};

export default Typography;
