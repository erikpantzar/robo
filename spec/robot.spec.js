describe("Robot", () => {
    let cj;

    beforeEach(function() {
        cj = new Robot(1,2);
    });

    it('should be able reach target state(1 3 N) upon fixed set of actions("HGHGGHGHG")', () => {
        cj.action('HGHGGHGHG');
        expect(cj.position()).toEqual('1 3 N');
    });
});
