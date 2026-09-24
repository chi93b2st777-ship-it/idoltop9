---
name: Image sync storage
description: Durable constraints for persisting user-selected images in cross-device sync data.
---

同期データには画像本体やData URLを含めず、ファイルストレージの安定した配信URLだけを保存する。アップロード完了前に同期レコードを更新せず、サーバー側でもインライン画像を拒否する。

**Why:** 画像をJSONBと通信ペイロードに含めると、枚数やサイズに比例して容量・通信制限へ近づき、別端末での再利用も不安定になるため。

**How to apply:** 新しい画像入力は直接ストレージへアップロードしてからURLを状態へ入れる。既存のインライン画像を扱う移行処理では、失敗時に元の状態を維持して再試行できるようにする。