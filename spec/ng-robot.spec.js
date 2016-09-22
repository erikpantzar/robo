describe('component: robot', function() {
    let $controller;

    beforeEach(module('robot'));
    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    it('should reach set destination when given set of moves', function() {
        const MOVES = "RRFLFFLRF";
        let bindings = {
            position: { x: 0, y: 0 },
            direction: 'N'
        };
        let ctrl = $controller('robotCtrl', null, bindings);
        // do the moves
        for (let i=0; i < MOVES.length; i++) {
            ctrl.move(MOVES[i]);
        };

        // cheat
        expect(ctrl.position.x).toEqual(3);
        expect(ctrl.position.y).toEqual(1);
        expect(ctrl.direction).toEqual('E');
    });
});
