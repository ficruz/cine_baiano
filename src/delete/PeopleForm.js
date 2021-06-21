{
  /* <FormControl>
  <Box className={classes.boxSeparator}></Box>

  <Typography className={classes.title} variant="h6">
    Pessoas
  </Typography>

  <Box className={classes.boxSeparator}></Box>

  <Typography> Pessoa </Typography>

  {initialData ? (
    <WindowedSelect
      components={customComponents}
      filterOption={customFilter}
      options={initialData.pessoa}
      isClearable={true}
      name="pessoa"
      key={personInputKey + 4}
      onChange={newPersonHandler("cod_pessoa")}
    ></WindowedSelect>
  ) : (
    <p>Loading</p>
  )}
  <Box className={classes.boxSeparator} />

  <Typography variant="body1">
    * Caso a pessoa não esteja na lista adicione-a:{" "}
    <Link to="/new/people">Adicionar Pessoas</Link>
  </Typography>
  <Box className={classes.boxSeparator}></Box>

  <Typography>Função (Obrigatório) </Typography>

  {initialData ? (
    <WindowedSelect
      components={customComponents}
      filterOption={customFilter}
      options={initialData.subcategoria}
      isClearable={true}
      name="subcategoria"
      key={personInputKey + 3}
      onChange={newPersonHandler("cod_subcategoria")}
    ></WindowedSelect>
  ) : (
    <p>Loading</p>
  )}
  <Box className={classes.boxSeparator} />

  <button onClick={addNewPersonHandler}>Adicionar Pessoa</button>
  <Box className={classes.boxSeparator} />

  {pessoa.map((el, indx) => {
    return (
      <p key={indx}>
        {el.cod_pessoa_label} - {el.cod_subcategoria_label}{" "}
        <button onClick={() => removePersonHandler(indx)}>x</button>
      </p>
    );
  })}
</FormControl>; */
}
