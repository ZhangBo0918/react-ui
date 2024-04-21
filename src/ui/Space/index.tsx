import { useMemo, useContext, HtmlHTMLAttributes, CSSProperties, ReactNode, FC, Children, Fragment } from "react";
import classNames from "classnames";
import { ConfigContext } from "./ConfigProvider";
import './index.scss'

export type SizeType = 'small' | 'middle' | 'large' | number | undefined;
export interface SpaceProps extends HtmlHTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: CSSProperties;
  size?: SizeType | [SizeType, SizeType];
  direction?: 'horizontal' | 'vertical';
  align?: 'start' | 'end' | 'center' | 'baseline';
  split?: ReactNode;
  wrap?: boolean;
}

const spaceSzie = {
  small: 8,
  middle: 16,
  large: 24,
};

function getNumberSize(size: SizeType) {
  return typeof size === 'string' ? spaceSzie[size] : size || 0;
}

const Space: FC<SpaceProps> = props => {
  const { space } = useContext(ConfigContext);
  const {
    className,
    style,
    children,
    size = space?.size || 'small',
    direction = 'horizontal',
    align,
    split,
    wrap = false,
    ...otherProps
  } = props;
  const childNodes = Children.toArray(props.children);

  const mergedAlign = direction === 'horizontal' && align === undefined ? 'center' : align;
  const cn = classNames(
    'space',
    `space-${direction}`,
    {
      [`space-align-${mergedAlign}`]: mergedAlign
    },
    className,
  )

  const nodes = childNodes.map((child: any, i: number) => {
    const key = child && child?.key || `space-item-${i}`;
    return <Fragment key={key}>
      <div className="space-item" key={key}>{child}</div>
      {
        i < childNodes.length && split && (
          <span className={`${className}-split`} style={style} key={i}>
            {split}
          </span>
        )
      }
    </Fragment>
  })

  const otherStyles: CSSProperties = {};
  const [horizontalSize, verticalSize] = useMemo(() => (
    (Array.isArray(size) ? size : [size, size]).map(item => getNumberSize(item))
  ), [size]);

  otherStyles.columnGap = horizontalSize;
  otherStyles.rowGap = verticalSize;
  if (wrap) {
    otherStyles.flexWrap = 'wrap';
  }
  

  return <div className={cn} style={{ ...otherStyles, ...style }} {...otherProps}>{nodes}</div>
};

export default Space;