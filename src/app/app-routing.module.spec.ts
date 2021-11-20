import { routes } from './app-routing.module';

describe('App routing', () => {
  it('should router defined', () => {
    expect(routes).toBeDefined();
  });

  it('should routes length than one', () => {
    const length = routes.length;
    let res: boolean;
    if (length > 1) {
      res = true;
    } else {
      res = false;
    }
    expect(res).toBeTruthy();
  });
});
