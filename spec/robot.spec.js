describe("Robot", () => {
    const Robot = require('../robo');
    let cj;

    beforeEach(()=> {
        cj = new Robot(1,2);
    });

    it('should be able to move', () => {
        cj.action('HGHGGHGHG');
        expect(cj.position()).toEqual('1 3 N');
    });
});
