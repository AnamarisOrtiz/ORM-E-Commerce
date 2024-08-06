const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
      },
    ],
  })
    .then((dbCategory) => {
      res.json(dbCategory);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occurred", err });
    });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findByPk(req.params.id, {
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
      },
    ],
  })
    .then((dbCategory) => {
      if (!dbCategory) {
        return res.status(404).json({ msg: "no such category" });
      }
      res.json(dbCategory);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occurred", err });
    });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name,
  })
    .then((newCategory) => {
      res.json(newCategory);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occurred", err });
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
  .then((updatedCategory) => {
    if (!updatedCategory[0]) {
      return res.status(404).json({ msg: 'No such category found' });
    }
    res.json(updatedCategory);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json({ msg: 'An error occurred', err });
  });
});



// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((delCategory) => {
      if (!delCategory) {
        return res.status(404).json({ msg: 'No such category found' });
      }
      res.json(delCategory);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: 'An error occurred', err });
    });
});


module.exports = router;
