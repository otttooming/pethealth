import * as React from 'react';
import RX from 'reactxp';

export interface SidebarProps {
  isCollapsed: boolean;
}

const style = {
  wrapper: RX.Styles.createViewStyle({
    padding: 32,
    alignItems: 'center',
    backgroundColor: '#ff6d6d',
    flexGrow: 1,
  }),
  wrapperMinimal: RX.Styles.createViewStyle({
    backgroundColor: '#ff7070',
    flexGrow: 1,
    maxWidth: 80,
  }),
  imageWrapper: RX.Styles.createViewStyle({
    maxWidth: 184,
    marginTop: 30,
  }),
  image: RX.Styles.createImageStyle({
    height: 160,
    width: 160,
  }),
};

class Sidebar extends RX.Component<SidebarProps, any> {
  static defaultProps = {
    isCollapsed: false,
  };

  public render() {
    const { isCollapsed } = this.props;

    if (isCollapsed) {
      return <RX.View style={style.wrapperMinimal} />;
    }

    return (
      <RX.View style={style.wrapper}>
        <RX.View style={style.imageWrapper}>
          <RX.Image
            style={style.image}
            source="https://res.cloudinary.com/dqa53guw9/image/upload/v1550518304/logo-valge.png"
          />
        </RX.View>
      </RX.View>
    );
  }
}

export default Sidebar;
