C:\dev\apiRest>npm test

> apirest@1.0.0 test
> jest

 FAIL  test/api/trips.route.spec.js
  Pruebas sobre la API de trips
    GET/api/trips
      × La ruta funciona (54 ms)
      × La petición nos devuelve una array de trips (8 ms)

  ● Pruebas sobre la API de trips › GET/api/trips › La ruta funciona

    expect(received).toContain(expected) // indexOf

    `Expected substring: "json"
    Received string:    "text/html; charset=utf-8"`

      15 |             //métodos para comprobar el status de la respuesta
      16 |             expect(response.status).toBe(200);
    > 17 |             expect(response.headers['content-type']).toContain('json');
         |                                                      ^
      18 |         });
      19 |
      20 |         it('La petición nos devuelve una array de trips', async() => {

      at Object.<anonymous> (test/api/trips.route.spec.js:17:54)

  ● Pruebas sobre la API de trips › GET/api/trips › La petición nos devuelve una array de trips

    expect(received).toBeInstanceOf(expected)

    Expected constructor: Array
    Received constructor: Object

      19 |
      20 |         it('La petición nos devuelve una array de trips', async() => {
    > 21 |             expect(response.body).toBeInstanceOf(Array);
         |                                   ^
      22 |         });
      23 |     });
      24 |

      at Object.<anonymous> (test/api/trips.route.spec.js:21:35)

Test Suites: 1 failed, 1 total
Tests:       2 failed, 2 total
Snapshots:   0 total
Time:        1.2 s, estimated 2 s
Ran all test suites.