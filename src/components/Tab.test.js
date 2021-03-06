import jsx from '../utilities/jsx';
import assert from 'assert';
import Tab from './Tab';

describe('Tab', function() {
  let testVar = 'old';

  before(function() {
    this.tab = <Tab
      label='Test'
      onclick={() => (testVar = 'new')}
    />;
  });

  describe('#render()', function() {
    it('should set el correctly', function() {
      assert.strictEqual(this.tab.className, 'tab');
      assert.strictEqual(this.tab.textContent, 'Test');
    });
    it('should send content on click', function() {
      this.tab.click();
      assert.strictEqual(testVar, 'new');
    });
  });
});
