import {getDOMInstance} from "./_setup";

describe('popup', () => {
    const provideToggleData = [
        {
            toggleId: 'post-likes',
            toggleAction: 'togglePostLikes',
        },
        {
            toggleId: 'post-comments',
            toggleAction: 'toggleCommentLikes',
        },
        {
            toggleId: 'follows',
            toggleAction: 'toggleFollows',
        },
    ];

    it.each(provideToggleData)('calls sendMessage on toggle click', (toggleData) => {
        const document = getDOMInstance().window.document;

        const rulesetToggle = document.getElementById(toggleData.toggleId);
        const toggleOnclickCallback = jest.fn(() => {
            chrome.runtime.sendMessage({action: toggleData.toggleAction});
        });
        rulesetToggle.addEventListener("click", toggleOnclickCallback);

        rulesetToggle.click();

        expect(chrome.runtime.sendMessage).toBeCalledWith({action: "togglePostLikes"});
    });

    it('sets the toggles to the correct position', async () => {
        // there is really no good way to test this rofl
    });
});