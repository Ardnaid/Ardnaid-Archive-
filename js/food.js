const buttons = document.querySelectorAll(".filter button");
const receipts = document.querySelectorAll(".receipt");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        // hapus active dari semua tombol
        buttons.forEach(btn => btn.classList.remove("active"));

        // aktifkan tombol yang diklik
        button.classList.add("active");

        const filter = button.dataset.filter;

        receipts.forEach(receipt => {

            if(filter === "all"){

                receipt.style.display = "block";

            }else{

                if(receipt.classList.contains(filter)){

                    receipt.style.display = "block";

                }else{

                    receipt.style.display = "none";

                }

            }

        });

    });

});