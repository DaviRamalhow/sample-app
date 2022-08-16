<template>

  <div class="container_register">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
      integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous" />

    <h3>Register Page</h3>

    <div class="form-group">
      <label>First Name</label>
      <input type="text" class="form-control" placeholder="First Name">
    </div>

    <div class="form-group">
      <label>Last Name</label>
      <input type="text" class="form-control" placeholder="Last Name">
    </div>

    <div class="form-group">
      <label>Email</label>
      <input type="email" class="form-control" placeholder="Email">
    </div>

    <div class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" placeholder="Password">
    </div>

    <div class="form-group">
      <label>Confirm Password</label>
      <input type="password" class="form-control" placeholder="Confrm Password">
    </div>

    <button class="btn btn-primary btn-block">Register</button>

  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.container_register {
  width: 500px;
  height: 500px;
  border: 1px solid black;
  margin: auto;
  border-radius: 20px;
}
</style>