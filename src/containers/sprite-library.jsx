import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import {injectIntl, intlShape, defineMessages} from 'react-intl';
import VM from 'scratch-vm';

import spriteLibraryContent from '../lib/libraries/sprites.json';
import randomizeSpritePosition from '../lib/randomize-sprite-position';
import spriteTags from '../lib/libraries/sprite-tags';
import axios from '../lib/request';
import LibraryComponent from '../components/library/library.jsx';

const messages = defineMessages({
    libraryTitle: {
        defaultMessage: 'Choose a Sprite',
        description: 'Heading for the sprite library',
        id: 'gui.spriteLibrary.chooseASprite'
    }
});

class SpriteLibrary extends React.PureComponent {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleItemSelect'
        ]);
        this.state = {
            spriteLibraryContent: []
        };
    }

    componentDidMount () {
        axios({url: '/backdrop/all', method: 'get', params: {}}).then(res => {
            // eslint-disable-next-line no-console
            console.log(res);
            this.setState({
                spriteLibraryContent: res.data
            });
        });
    }

    handleItemSelect (item) {
        // eslint-disable-next-line no-console
        // console.log(JSON.stringify(item));
        // Randomize position of library sprite
        randomizeSpritePosition(item);
        // eslint-disable-next-line no-console
        // console.log(JSON.stringify(item));
        this.props.vm.addSprite(JSON.stringify(item)).then(res => {
            // eslint-disable-next-line no-console
            console.log(res);
            this.props.onActivateBlocksTab();
        });
    }


    render () {
        // eslint-disable-next-line no-console
        // console.log(this.props);

        return (
            <LibraryComponent
                data={spriteLibraryContent}
                id="spriteLibrary"
                tags={spriteTags}
                title={this.props.intl.formatMessage(messages.libraryTitle)}
                onItemSelected={this.handleItemSelect}
                onRequestClose={this.props.onRequestClose}
            />
        );
    }
}

SpriteLibrary.propTypes = {
    intl: intlShape.isRequired,
    onActivateBlocksTab: PropTypes.func.isRequired,
    onRequestClose: PropTypes.func,
    vm: PropTypes.instanceOf(VM).isRequired
};

export default injectIntl(SpriteLibrary);
