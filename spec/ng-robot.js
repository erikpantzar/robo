describe('component: robot', () => {
    let $componentController;

    beforeEach(module('robot'));
    beforeEach(inject( (_$componentController_) => {
        $componentController = _$componentController_;
    }));

    it('should call the `onMove` binding, when moving the robot', () => {});
  });

});
