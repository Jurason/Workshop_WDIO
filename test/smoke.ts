
describe('Smoke test', () => {
    it('ducks should be alive', () => {
        browser.url('/')
        expect(browser).toHaveTitle('Message. Video. Phone. | RingCentral');
    })

    // it('ducks should be dead @SMOKE', () => {
    //     browser.url('/')
    //     expect(browser).toHaveTitle('Ducks Store | Online Store');
    // })
})