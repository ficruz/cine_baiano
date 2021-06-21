{
  /* <FormControl>
  <Box className={classes.boxSeparator}></Box>

  <Divider />
  <Box className={classes.boxSeparator}></Box>
  <Typography className={classes.title} variant="h6">
    Carregar Novas Imagens do Banco de Dados
  </Typography>

  <Box className={classes.boxSeparator}></Box>

  
  <Typography>Versão Grande</Typography>
  <input
    type="file"
    id="input_file"
    key={photoInputKey}
    onChange={setTempPhotoHandler("large")}
  />

  <Box className={classes.boxSeparator}></Box>

  <Typography>Versão Pequena</Typography>
  <input
    type="file"
    key={photoInputKey - 2}
    onChange={setTempPhotoHandler("thumb")}
  />

  <Box className={classes.boxSeparator}></Box>

  <FormControlLabel
    control={
      <Switch
        checked={tempPhoto.sts_cartaz}
        onChange={posterButtonHandle}
        name="checkedB"
        color="primary"
        disabled={posterButton}
      />
    }
    label="Cartaz"
  />

  <Box className={classes.boxSeparator}></Box>

  <button onClick={() => addImageHandler()}> Adicionar Imagem</button>

  <Box className={classes.boxSeparator}></Box>

  {photo.map((el, indx) => {
    return (
      <p key={indx} id={indx}>
        {el["large"]} - {el["thumb"]} {el["sts_cartaz"] ? "--CARTAZ--" : null}{" "}
        <button onClick={() => removeImageHandler(indx)}>x</button>
      </p>
    );
  })}

  <Box className={classes.boxSeparator}></Box>
  <Typography>
    * Observação: Atualmente, essas imagens estão sendo modificadas APENAS no
    banco de dados SQL, e não no servidor de fotos AWS. Este último precisa ser
    modificado manualmente.
  </Typography>
  <Box className={classes.boxSeparator}></Box>
  <Divider />
</FormControl>; */
}
