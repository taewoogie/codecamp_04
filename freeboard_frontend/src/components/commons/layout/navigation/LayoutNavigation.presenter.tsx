import { MenuItem, Wrapper } from "./LayoutNavigation.styles";
import { ILayoutNavigationUIProps } from "./LayoutNavigation.types";

export default function LayoutNavigationUI(props: ILayoutNavigationUIProps) {
  return (
    <Wrapper>
      <MenuItem id="/covid" onClick={props.onClickMenu}>
        Covid -19
      </MenuItem>
      <>|</>
      <MenuItem id="/boards" onClick={props.onClickMenu}>
        Woogie Boards
      </MenuItem>
      <>|</>
      <MenuItem id="/markets" onClick={props.onClickMenu}>
        Woogie Product
      </MenuItem>
      <>|</>
      <MenuItem id="/mypages" onClick={props.onClickMenu}>
        Woogie Page
      </MenuItem>
    </Wrapper>
  );
}
