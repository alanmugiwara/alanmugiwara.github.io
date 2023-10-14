# alanmugiwara.github.io
<!DOCTYPE html>
<html>
<head>
  <title>Visualização do JSON</title>
</head>
<body>
  <h1>Conteúdo do JSON</h1>
  <pre id="json-content"></pre>

  <script>
    fetch('https://raw.githubusercontent.com/alanmugiwara/github.io/main/politicadeprivacidade.json') // Substitua 'seu-arquivo.json' pelo nome do seu arquivo JSON
      .then(response => response.json())
      .then(data => {
        document.getElementById('json-content').textContent = JSON.stringify(data, null, 2);
      })
      .catch(error => {
        console.error('Erro ao carregar o JSON: ' + error);
      });
  </script>
</body>
</html>
