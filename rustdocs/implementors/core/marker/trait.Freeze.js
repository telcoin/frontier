(function() {var implementors = {};
implementors["fc_consensus"] = [{"text":"impl Freeze for <a class=\"enum\" href=\"fc_consensus/enum.Error.html\" title=\"enum fc_consensus::Error\">Error</a>","synthetic":true,"types":["fc_consensus::Error"]},{"text":"impl&lt;B, I, C&gt; Freeze for <a class=\"struct\" href=\"fc_consensus/struct.FrontierBlockImport.html\" title=\"struct fc_consensus::FrontierBlockImport\">FrontierBlockImport</a>&lt;B, I, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Freeze,&nbsp;</span>","synthetic":true,"types":["fc_consensus::FrontierBlockImport"]}];
implementors["fc_db"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"fc_db/struct.DatabaseSettings.html\" title=\"struct fc_db::DatabaseSettings\">DatabaseSettings</a>","synthetic":true,"types":["fc_db::DatabaseSettings"]},{"text":"impl Freeze for <a class=\"enum\" href=\"fc_db/enum.DatabaseSettingsSrc.html\" title=\"enum fc_db::DatabaseSettingsSrc\">DatabaseSettingsSrc</a>","synthetic":true,"types":["fc_db::DatabaseSettingsSrc"]},{"text":"impl&lt;Block&gt; Freeze for <a class=\"struct\" href=\"fc_db/struct.Backend.html\" title=\"struct fc_db::Backend\">Backend</a>&lt;Block&gt;","synthetic":true,"types":["fc_db::Backend"]},{"text":"impl&lt;Block&gt; Freeze for <a class=\"struct\" href=\"fc_db/struct.MetaDb.html\" title=\"struct fc_db::MetaDb\">MetaDb</a>&lt;Block&gt;","synthetic":true,"types":["fc_db::MetaDb"]},{"text":"impl&lt;Block&gt; Freeze for <a class=\"struct\" href=\"fc_db/struct.MappingCommitment.html\" title=\"struct fc_db::MappingCommitment\">MappingCommitment</a>&lt;Block&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Block as Block&gt;::Hash: Freeze,&nbsp;</span>","synthetic":true,"types":["fc_db::MappingCommitment"]},{"text":"impl&lt;Block&gt; Freeze for <a class=\"struct\" href=\"fc_db/struct.TransactionMetadata.html\" title=\"struct fc_db::TransactionMetadata\">TransactionMetadata</a>&lt;Block&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Block as Block&gt;::Hash: Freeze,&nbsp;</span>","synthetic":true,"types":["fc_db::TransactionMetadata"]},{"text":"impl&lt;Block&gt; Freeze for <a class=\"struct\" href=\"fc_db/struct.MappingDb.html\" title=\"struct fc_db::MappingDb\">MappingDb</a>&lt;Block&gt;","synthetic":true,"types":["fc_db::MappingDb"]}];
implementors["fc_mapping_sync"] = [{"text":"impl&lt;Block, C, B&gt; Freeze for <a class=\"struct\" href=\"fc_mapping_sync/struct.MappingSyncWorker.html\" title=\"struct fc_mapping_sync::MappingSyncWorker\">MappingSyncWorker</a>&lt;Block, C, B&gt;","synthetic":true,"types":["fc_mapping_sync::worker::MappingSyncWorker"]}];
implementors["fc_rpc"] = [{"text":"impl&lt;B, C, P, CT, BE, H&gt; Freeze for <a class=\"struct\" href=\"fc_rpc/struct.EthApi.html\" title=\"struct fc_rpc::EthApi\">EthApi</a>&lt;B, C, P, CT, BE, H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CT: Freeze,&nbsp;</span>","synthetic":true,"types":["fc_rpc::eth::EthApi"]},{"text":"impl&lt;B, BE, C, H&gt; Freeze for <a class=\"struct\" href=\"fc_rpc/struct.NetApi.html\" title=\"struct fc_rpc::NetApi\">NetApi</a>&lt;B, BE, C, H&gt;","synthetic":true,"types":["fc_rpc::eth::NetApi"]},{"text":"impl&lt;B, C&gt; Freeze for <a class=\"struct\" href=\"fc_rpc/struct.Web3Api.html\" title=\"struct fc_rpc::Web3Api\">Web3Api</a>&lt;B, C&gt;","synthetic":true,"types":["fc_rpc::eth::Web3Api"]},{"text":"impl&lt;B, C, BE&gt; Freeze for <a class=\"struct\" href=\"fc_rpc/struct.EthFilterApi.html\" title=\"struct fc_rpc::EthFilterApi\">EthFilterApi</a>&lt;B, C, BE&gt;","synthetic":true,"types":["fc_rpc::eth::EthFilterApi"]},{"text":"impl&lt;B, C&gt; Freeze for <a class=\"struct\" href=\"fc_rpc/struct.EthTask.html\" title=\"struct fc_rpc::EthTask\">EthTask</a>&lt;B, C&gt;","synthetic":true,"types":["fc_rpc::eth::EthTask"]},{"text":"impl Freeze for <a class=\"struct\" href=\"fc_rpc/struct.HexEncodedIdProvider.html\" title=\"struct fc_rpc::HexEncodedIdProvider\">HexEncodedIdProvider</a>","synthetic":true,"types":["fc_rpc::eth_pubsub::HexEncodedIdProvider"]},{"text":"impl&lt;B, P, C, BE, H&gt; Freeze for <a class=\"struct\" href=\"fc_rpc/struct.EthPubSubApi.html\" title=\"struct fc_rpc::EthPubSubApi\">EthPubSubApi</a>&lt;B, P, C, BE, H&gt;","synthetic":true,"types":["fc_rpc::eth_pubsub::EthPubSubApi"]},{"text":"impl&lt;B, C, BE&gt; Freeze for <a class=\"struct\" href=\"fc_rpc/struct.SchemaV1Override.html\" title=\"struct fc_rpc::SchemaV1Override\">SchemaV1Override</a>&lt;B, C, BE&gt;","synthetic":true,"types":["fc_rpc::overrides::schema_v1_override::SchemaV1Override"]},{"text":"impl&lt;Block&gt; Freeze for <a class=\"struct\" href=\"fc_rpc/struct.OverrideHandle.html\" title=\"struct fc_rpc::OverrideHandle\">OverrideHandle</a>&lt;Block&gt;","synthetic":true,"types":["fc_rpc::overrides::OverrideHandle"]},{"text":"impl&lt;B, C&gt; Freeze for <a class=\"struct\" href=\"fc_rpc/struct.RuntimeApiStorageOverride.html\" title=\"struct fc_rpc::RuntimeApiStorageOverride\">RuntimeApiStorageOverride</a>&lt;B, C&gt;","synthetic":true,"types":["fc_rpc::overrides::RuntimeApiStorageOverride"]},{"text":"impl Freeze for <a class=\"struct\" href=\"fc_rpc/struct.EthDevSigner.html\" title=\"struct fc_rpc::EthDevSigner\">EthDevSigner</a>","synthetic":true,"types":["fc_rpc::EthDevSigner"]}];
implementors["fc_rpc_core"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"fc_rpc_core/types/struct.AccountInfo.html\" title=\"struct fc_rpc_core::types::AccountInfo\">AccountInfo</a>","synthetic":true,"types":["fc_rpc_core::types::account_info::AccountInfo"]},{"text":"impl Freeze for <a class=\"struct\" href=\"fc_rpc_core/types/struct.StorageProof.html\" title=\"struct fc_rpc_core::types::StorageProof\">StorageProof</a>","synthetic":true,"types":["fc_rpc_core::types::account_info::StorageProof"]},{"text":"impl Freeze for <a class=\"struct\" href=\"fc_rpc_core/types/struct.EthAccount.html\" title=\"struct fc_rpc_core::types::EthAccount\">EthAccount</a>","synthetic":true,"types":["fc_rpc_core::types::account_info::EthAccount"]},{"text":"impl Freeze for <a class=\"struct\" href=\"fc_rpc_core/types/struct.ExtAccountInfo.html\" title=\"struct fc_rpc_core::types::ExtAccountInfo\">ExtAccountInfo</a>","synthetic":true,"types":["fc_rpc_core::types::account_info::ExtAccountInfo"]},{"text":"impl Freeze for <a class=\"struct\" href=\"fc_rpc_core/types/struct.RecoveredAccount.html\" title=\"struct fc_rpc_core::types::RecoveredAccount\">RecoveredAccount</a>","synthetic":true,"types":["fc_rpc_core::types::account_info::RecoveredAccount"]},{"text":"impl Freeze for <a class=\"enum\" href=\"fc_rpc_core/types/enum.BlockTransactions.html\" title=\"enum fc_rpc_core::types::BlockTransactions\">BlockTransactions</a>","synthetic":true,"types":["fc_rpc_core::types::block::BlockTransactions"]},{"text":"impl Freeze for <a class=\"struct\" href=\"fc_rpc_core/types/struct.Block.html\" title=\"struct fc_rpc_core::types::Block\">Block</a>","synthetic":true,"types":["fc_rpc_core::types::block::Block"]},{"text":"impl Freeze for <a class=\"struct\" href=\"fc_rpc_core/types/struct.Header.html\" title=\"struct fc_rpc_core::types::Header\">Header</a>","synthetic":true,"types":["fc_rpc_core::types::block::Header"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"fc_rpc_core/types/struct.Rich.html\" title=\"struct fc_rpc_core::types::Rich\">Rich</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["fc_rpc_core::types::block::Rich"]},{"text":"impl Freeze for <a class=\"enum\" href=\"fc_rpc_core/types/enum.BlockNumber.html\" title=\"enum fc_rpc_core::types::BlockNumber\">BlockNumber</a>","synthetic":true,"types":["fc_rpc_core::types::block_number::BlockNumber"]},{"text":"impl Freeze for <a class=\"struct\" href=\"fc_rpc_core/types/struct.Bytes.html\" title=\"struct fc_rpc_core::types::Bytes\">Bytes</a>","synthetic":true,"types":["fc_rpc_core::types::bytes::Bytes"]},{"text":"impl Freeze for <a class=\"struct\" href=\"fc_rpc_core/types/struct.CallRequest.html\" title=\"struct fc_rpc_core::types::CallRequest\">CallRequest</a>","synthetic":true,"types":["fc_rpc_core::types::call_request::CallRequest"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"enum\" href=\"fc_rpc_core/types/enum.VariadicValue.html\" title=\"enum fc_rpc_core::types::VariadicValue\">VariadicValue</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["fc_rpc_core::types::filter::VariadicValue"]},{"text":"impl Freeze for <a class=\"struct\" href=\"fc_rpc_core/types/struct.Filter.html\" title=\"struct fc_rpc_core::types::Filter\">Filter</a>","synthetic":true,"types":["fc_rpc_core::types::filter::Filter"]},{"text":"impl Freeze for <a class=\"struct\" href=\"fc_rpc_core/types/struct.FilteredParams.html\" title=\"struct fc_rpc_core::types::FilteredParams\">FilteredParams</a>","synthetic":true,"types":["fc_rpc_core::types::filter::FilteredParams"]},{"text":"impl Freeze for <a class=\"enum\" href=\"fc_rpc_core/types/enum.FilterChanges.html\" title=\"enum fc_rpc_core::types::FilterChanges\">FilterChanges</a>","synthetic":true,"types":["fc_rpc_core::types::filter::FilterChanges"]},{"text":"impl Freeze for <a class=\"enum\" href=\"fc_rpc_core/types/enum.FilterType.html\" title=\"enum fc_rpc_core::types::FilterType\">FilterType</a>","synthetic":true,"types":["fc_rpc_core::types::filter::FilterType"]},{"text":"impl Freeze for <a class=\"struct\" href=\"fc_rpc_core/types/struct.FilterPoolItem.html\" title=\"struct fc_rpc_core::types::FilterPoolItem\">FilterPoolItem</a>","synthetic":true,"types":["fc_rpc_core::types::filter::FilterPoolItem"]},{"text":"impl Freeze for <a class=\"struct\" href=\"fc_rpc_core/types/struct.Index.html\" title=\"struct fc_rpc_core::types::Index\">Index</a>","synthetic":true,"types":["fc_rpc_core::types::index::Index"]},{"text":"impl Freeze for <a class=\"struct\" href=\"fc_rpc_core/types/struct.Log.html\" title=\"struct fc_rpc_core::types::Log\">Log</a>","synthetic":true,"types":["fc_rpc_core::types::log::Log"]},{"text":"impl Freeze for <a class=\"struct\" href=\"fc_rpc_core/types/struct.Receipt.html\" title=\"struct fc_rpc_core::types::Receipt\">Receipt</a>","synthetic":true,"types":["fc_rpc_core::types::receipt::Receipt"]},{"text":"impl Freeze for <a class=\"struct\" href=\"fc_rpc_core/types/struct.SyncInfo.html\" title=\"struct fc_rpc_core::types::SyncInfo\">SyncInfo</a>","synthetic":true,"types":["fc_rpc_core::types::sync::SyncInfo"]},{"text":"impl Freeze for <a class=\"struct\" href=\"fc_rpc_core/types/struct.Peers.html\" title=\"struct fc_rpc_core::types::Peers\">Peers</a>","synthetic":true,"types":["fc_rpc_core::types::sync::Peers"]},{"text":"impl Freeze for <a class=\"enum\" href=\"fc_rpc_core/types/enum.PeerCount.html\" title=\"enum fc_rpc_core::types::PeerCount\">PeerCount</a>","synthetic":true,"types":["fc_rpc_core::types::sync::PeerCount"]},{"text":"impl Freeze for <a class=\"struct\" href=\"fc_rpc_core/types/struct.PeerInfo.html\" title=\"struct fc_rpc_core::types::PeerInfo\">PeerInfo</a>","synthetic":true,"types":["fc_rpc_core::types::sync::PeerInfo"]},{"text":"impl Freeze for <a class=\"struct\" href=\"fc_rpc_core/types/struct.PeerNetworkInfo.html\" title=\"struct fc_rpc_core::types::PeerNetworkInfo\">PeerNetworkInfo</a>","synthetic":true,"types":["fc_rpc_core::types::sync::PeerNetworkInfo"]},{"text":"impl Freeze for <a class=\"struct\" href=\"fc_rpc_core/types/struct.PeerProtocolsInfo.html\" title=\"struct fc_rpc_core::types::PeerProtocolsInfo\">PeerProtocolsInfo</a>","synthetic":true,"types":["fc_rpc_core::types::sync::PeerProtocolsInfo"]},{"text":"impl Freeze for <a class=\"struct\" href=\"fc_rpc_core/types/struct.EthProtocolInfo.html\" title=\"struct fc_rpc_core::types::EthProtocolInfo\">EthProtocolInfo</a>","synthetic":true,"types":["fc_rpc_core::types::sync::EthProtocolInfo"]},{"text":"impl Freeze for <a class=\"struct\" href=\"fc_rpc_core/types/struct.PipProtocolInfo.html\" title=\"struct fc_rpc_core::types::PipProtocolInfo\">PipProtocolInfo</a>","synthetic":true,"types":["fc_rpc_core::types::sync::PipProtocolInfo"]},{"text":"impl Freeze for <a class=\"enum\" href=\"fc_rpc_core/types/enum.SyncStatus.html\" title=\"enum fc_rpc_core::types::SyncStatus\">SyncStatus</a>","synthetic":true,"types":["fc_rpc_core::types::sync::SyncStatus"]},{"text":"impl Freeze for <a class=\"struct\" href=\"fc_rpc_core/types/struct.TransactionStats.html\" title=\"struct fc_rpc_core::types::TransactionStats\">TransactionStats</a>","synthetic":true,"types":["fc_rpc_core::types::sync::TransactionStats"]},{"text":"impl Freeze for <a class=\"struct\" href=\"fc_rpc_core/types/struct.ChainStatus.html\" title=\"struct fc_rpc_core::types::ChainStatus\">ChainStatus</a>","synthetic":true,"types":["fc_rpc_core::types::sync::ChainStatus"]},{"text":"impl Freeze for <a class=\"struct\" href=\"fc_rpc_core/types/struct.Transaction.html\" title=\"struct fc_rpc_core::types::Transaction\">Transaction</a>","synthetic":true,"types":["fc_rpc_core::types::transaction::Transaction"]},{"text":"impl Freeze for <a class=\"enum\" href=\"fc_rpc_core/types/enum.LocalTransactionStatus.html\" title=\"enum fc_rpc_core::types::LocalTransactionStatus\">LocalTransactionStatus</a>","synthetic":true,"types":["fc_rpc_core::types::transaction::LocalTransactionStatus"]},{"text":"impl Freeze for <a class=\"struct\" href=\"fc_rpc_core/types/struct.RichRawTransaction.html\" title=\"struct fc_rpc_core::types::RichRawTransaction\">RichRawTransaction</a>","synthetic":true,"types":["fc_rpc_core::types::transaction::RichRawTransaction"]},{"text":"impl Freeze for <a class=\"struct\" href=\"fc_rpc_core/types/struct.PendingTransaction.html\" title=\"struct fc_rpc_core::types::PendingTransaction\">PendingTransaction</a>","synthetic":true,"types":["fc_rpc_core::types::transaction::PendingTransaction"]},{"text":"impl Freeze for <a class=\"struct\" href=\"fc_rpc_core/types/struct.TransactionRequest.html\" title=\"struct fc_rpc_core::types::TransactionRequest\">TransactionRequest</a>","synthetic":true,"types":["fc_rpc_core::types::transaction_request::TransactionRequest"]},{"text":"impl Freeze for <a class=\"struct\" href=\"fc_rpc_core/types/struct.Work.html\" title=\"struct fc_rpc_core::types::Work\">Work</a>","synthetic":true,"types":["fc_rpc_core::types::work::Work"]},{"text":"impl Freeze for <a class=\"enum\" href=\"fc_rpc_core/types/pubsub/enum.Result.html\" title=\"enum fc_rpc_core::types::pubsub::Result\">Result</a>","synthetic":true,"types":["fc_rpc_core::types::pubsub::Result"]},{"text":"impl Freeze for <a class=\"struct\" href=\"fc_rpc_core/types/pubsub/struct.PubSubSyncStatus.html\" title=\"struct fc_rpc_core::types::pubsub::PubSubSyncStatus\">PubSubSyncStatus</a>","synthetic":true,"types":["fc_rpc_core::types::pubsub::PubSubSyncStatus"]},{"text":"impl Freeze for <a class=\"enum\" href=\"fc_rpc_core/types/pubsub/enum.Kind.html\" title=\"enum fc_rpc_core::types::pubsub::Kind\">Kind</a>","synthetic":true,"types":["fc_rpc_core::types::pubsub::Kind"]},{"text":"impl Freeze for <a class=\"enum\" href=\"fc_rpc_core/types/pubsub/enum.Params.html\" title=\"enum fc_rpc_core::types::pubsub::Params\">Params</a>","synthetic":true,"types":["fc_rpc_core::types::pubsub::Params"]}];
implementors["fp_consensus"] = [{"text":"impl Freeze for <a class=\"enum\" href=\"fp_consensus/enum.Log.html\" title=\"enum fp_consensus::Log\">Log</a>","synthetic":true,"types":["fp_consensus::Log"]},{"text":"impl Freeze for <a class=\"enum\" href=\"fp_consensus/enum.PreLog.html\" title=\"enum fp_consensus::PreLog\">PreLog</a>","synthetic":true,"types":["fp_consensus::PreLog"]},{"text":"impl Freeze for <a class=\"enum\" href=\"fp_consensus/enum.PostLog.html\" title=\"enum fp_consensus::PostLog\">PostLog</a>","synthetic":true,"types":["fp_consensus::PostLog"]},{"text":"impl Freeze for <a class=\"struct\" href=\"fp_consensus/struct.Hashes.html\" title=\"struct fp_consensus::Hashes\">Hashes</a>","synthetic":true,"types":["fp_consensus::Hashes"]},{"text":"impl Freeze for <a class=\"enum\" href=\"fp_consensus/enum.FindLogError.html\" title=\"enum fp_consensus::FindLogError\">FindLogError</a>","synthetic":true,"types":["fp_consensus::FindLogError"]}];
implementors["fp_evm"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"fp_evm/struct.Vicinity.html\" title=\"struct fp_evm::Vicinity\">Vicinity</a>","synthetic":true,"types":["fp_evm::Vicinity"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"fp_evm/struct.ExecutionInfo.html\" title=\"struct fp_evm::ExecutionInfo\">ExecutionInfo</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["fp_evm::ExecutionInfo"]},{"text":"impl Freeze for <a class=\"enum\" href=\"fp_evm/enum.CallOrCreateInfo.html\" title=\"enum fp_evm::CallOrCreateInfo\">CallOrCreateInfo</a>","synthetic":true,"types":["fp_evm::CallOrCreateInfo"]}];
implementors["fp_rpc"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"fp_rpc/struct.TransactionStatus.html\" title=\"struct fp_rpc::TransactionStatus\">TransactionStatus</a>","synthetic":true,"types":["fp_rpc::TransactionStatus"]}];
implementors["frontier_template_node"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Freeze.html\" title=\"trait core::marker::Freeze\">Freeze</a> for <a class=\"struct\" href=\"frontier_template_node/service/struct.Executor.html\" title=\"struct frontier_template_node::service::Executor\">Executor</a>","synthetic":true,"types":["frontier_template_node::service::Executor"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Freeze.html\" title=\"trait core::marker::Freeze\">Freeze</a> for <a class=\"struct\" href=\"frontier_template_node/service/struct.MockTimestampInherentDataProvider.html\" title=\"struct frontier_template_node::service::MockTimestampInherentDataProvider\">MockTimestampInherentDataProvider</a>","synthetic":true,"types":["frontier_template_node::service::MockTimestampInherentDataProvider"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Freeze.html\" title=\"trait core::marker::Freeze\">Freeze</a> for <a class=\"struct\" href=\"frontier_template_node/cli/struct.RunCmd.html\" title=\"struct frontier_template_node::cli::RunCmd\">RunCmd</a>","synthetic":true,"types":["frontier_template_node::cli::RunCmd"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Freeze.html\" title=\"trait core::marker::Freeze\">Freeze</a> for <a class=\"struct\" href=\"frontier_template_node/cli/struct.Cli.html\" title=\"struct frontier_template_node::cli::Cli\">Cli</a>","synthetic":true,"types":["frontier_template_node::cli::Cli"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Freeze.html\" title=\"trait core::marker::Freeze\">Freeze</a> for <a class=\"enum\" href=\"frontier_template_node/cli/enum.Subcommand.html\" title=\"enum frontier_template_node::cli::Subcommand\">Subcommand</a>","synthetic":true,"types":["frontier_template_node::cli::Subcommand"]},{"text":"impl&lt;C, F, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Freeze.html\" title=\"trait core::marker::Freeze\">Freeze</a> for <a class=\"struct\" href=\"frontier_template_node/rpc/struct.LightDeps.html\" title=\"struct frontier_template_node::rpc::LightDeps\">LightDeps</a>&lt;C, F, P&gt;","synthetic":true,"types":["frontier_template_node::rpc::LightDeps"]},{"text":"impl&lt;C, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Freeze.html\" title=\"trait core::marker::Freeze\">Freeze</a> for <a class=\"struct\" href=\"frontier_template_node/rpc/struct.FullDeps.html\" title=\"struct frontier_template_node::rpc::FullDeps\">FullDeps</a>&lt;C, P&gt;","synthetic":true,"types":["frontier_template_node::rpc::FullDeps"]}];
implementors["frontier_template_runtime"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"frontier_template_runtime/opaque/struct.SessionKeys.html\" title=\"struct frontier_template_runtime::opaque::SessionKeys\">SessionKeys</a>","synthetic":true,"types":["frontier_template_runtime::opaque::SessionKeys"]},{"text":"impl Freeze for <a class=\"struct\" href=\"frontier_template_runtime/struct.Version.html\" title=\"struct frontier_template_runtime::Version\">Version</a>","synthetic":true,"types":["frontier_template_runtime::Version"]},{"text":"impl Freeze for <a class=\"struct\" href=\"frontier_template_runtime/struct.BlockHashCount.html\" title=\"struct frontier_template_runtime::BlockHashCount\">BlockHashCount</a>","synthetic":true,"types":["frontier_template_runtime::BlockHashCount"]},{"text":"impl Freeze for <a class=\"struct\" href=\"frontier_template_runtime/struct.BlockWeights.html\" title=\"struct frontier_template_runtime::BlockWeights\">BlockWeights</a>","synthetic":true,"types":["frontier_template_runtime::BlockWeights"]},{"text":"impl Freeze for <a class=\"struct\" href=\"frontier_template_runtime/struct.BlockLength.html\" title=\"struct frontier_template_runtime::BlockLength\">BlockLength</a>","synthetic":true,"types":["frontier_template_runtime::BlockLength"]},{"text":"impl Freeze for <a class=\"struct\" href=\"frontier_template_runtime/struct.SS58Prefix.html\" title=\"struct frontier_template_runtime::SS58Prefix\">SS58Prefix</a>","synthetic":true,"types":["frontier_template_runtime::SS58Prefix"]},{"text":"impl Freeze for <a class=\"struct\" href=\"frontier_template_runtime/struct.MinimumPeriod.html\" title=\"struct frontier_template_runtime::MinimumPeriod\">MinimumPeriod</a>","synthetic":true,"types":["frontier_template_runtime::MinimumPeriod"]},{"text":"impl Freeze for <a class=\"struct\" href=\"frontier_template_runtime/struct.ExistentialDeposit.html\" title=\"struct frontier_template_runtime::ExistentialDeposit\">ExistentialDeposit</a>","synthetic":true,"types":["frontier_template_runtime::ExistentialDeposit"]},{"text":"impl Freeze for <a class=\"struct\" href=\"frontier_template_runtime/struct.MaxLocks.html\" title=\"struct frontier_template_runtime::MaxLocks\">MaxLocks</a>","synthetic":true,"types":["frontier_template_runtime::MaxLocks"]},{"text":"impl Freeze for <a class=\"struct\" href=\"frontier_template_runtime/struct.TransactionByteFee.html\" title=\"struct frontier_template_runtime::TransactionByteFee\">TransactionByteFee</a>","synthetic":true,"types":["frontier_template_runtime::TransactionByteFee"]},{"text":"impl Freeze for <a class=\"struct\" href=\"frontier_template_runtime/struct.ChainId.html\" title=\"struct frontier_template_runtime::ChainId\">ChainId</a>","synthetic":true,"types":["frontier_template_runtime::ChainId"]},{"text":"impl Freeze for <a class=\"struct\" href=\"frontier_template_runtime/struct.BlockGasLimit.html\" title=\"struct frontier_template_runtime::BlockGasLimit\">BlockGasLimit</a>","synthetic":true,"types":["frontier_template_runtime::BlockGasLimit"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"frontier_template_runtime/struct.EthereumFindAuthor.html\" title=\"struct frontier_template_runtime::EthereumFindAuthor\">EthereumFindAuthor</a>&lt;F&gt;","synthetic":true,"types":["frontier_template_runtime::EthereumFindAuthor"]},{"text":"impl Freeze for <a class=\"struct\" href=\"frontier_template_runtime/struct.BoundDivision.html\" title=\"struct frontier_template_runtime::BoundDivision\">BoundDivision</a>","synthetic":true,"types":["frontier_template_runtime::BoundDivision"]},{"text":"impl Freeze for <a class=\"struct\" href=\"frontier_template_runtime/struct.Runtime.html\" title=\"struct frontier_template_runtime::Runtime\">Runtime</a>","synthetic":true,"types":["frontier_template_runtime::Runtime"]},{"text":"impl Freeze for <a class=\"enum\" href=\"frontier_template_runtime/enum.Event.html\" title=\"enum frontier_template_runtime::Event\">Event</a>","synthetic":true,"types":["frontier_template_runtime::Event"]},{"text":"impl Freeze for <a class=\"struct\" href=\"frontier_template_runtime/struct.Origin.html\" title=\"struct frontier_template_runtime::Origin\">Origin</a>","synthetic":true,"types":["frontier_template_runtime::Origin"]},{"text":"impl Freeze for <a class=\"enum\" href=\"frontier_template_runtime/enum.OriginCaller.html\" title=\"enum frontier_template_runtime::OriginCaller\">OriginCaller</a>","synthetic":true,"types":["frontier_template_runtime::OriginCaller"]},{"text":"impl Freeze for <a class=\"struct\" href=\"frontier_template_runtime/struct.PalletInfo.html\" title=\"struct frontier_template_runtime::PalletInfo\">PalletInfo</a>","synthetic":true,"types":["frontier_template_runtime::PalletInfo"]},{"text":"impl Freeze for <a class=\"enum\" href=\"frontier_template_runtime/enum.Call.html\" title=\"enum frontier_template_runtime::Call\">Call</a>","synthetic":true,"types":["frontier_template_runtime::Call"]},{"text":"impl Freeze for <a class=\"struct\" href=\"frontier_template_runtime/struct.GenesisConfig.html\" title=\"struct frontier_template_runtime::GenesisConfig\">GenesisConfig</a>","synthetic":true,"types":["frontier_template_runtime::GenesisConfig"]},{"text":"impl Freeze for <a class=\"struct\" href=\"frontier_template_runtime/struct.TransactionConverter.html\" title=\"struct frontier_template_runtime::TransactionConverter\">TransactionConverter</a>","synthetic":true,"types":["frontier_template_runtime::TransactionConverter"]},{"text":"impl Freeze for <a class=\"struct\" href=\"frontier_template_runtime/struct.RuntimeApi.html\" title=\"struct frontier_template_runtime::RuntimeApi\">RuntimeApi</a>","synthetic":true,"types":["frontier_template_runtime::RuntimeApi"]},{"text":"impl&lt;Block, C&gt; !Freeze for <a class=\"struct\" href=\"frontier_template_runtime/struct.RuntimeApiImpl.html\" title=\"struct frontier_template_runtime::RuntimeApiImpl\">RuntimeApiImpl</a>&lt;Block, C&gt;","synthetic":true,"types":["frontier_template_runtime::RuntimeApiImpl"]}];
implementors["frontier_template_test_client"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"frontier_template_test_client/struct.LocalExecutor.html\" title=\"struct frontier_template_test_client::LocalExecutor\">LocalExecutor</a>","synthetic":true,"types":["frontier_template_test_client::LocalExecutor"]},{"text":"impl Freeze for <a class=\"struct\" href=\"frontier_template_test_client/struct.GenesisParameters.html\" title=\"struct frontier_template_test_client::GenesisParameters\">GenesisParameters</a>","synthetic":true,"types":["frontier_template_test_client::GenesisParameters"]}];
implementors["pallet_dynamic_fee"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_dynamic_fee/struct.GenesisConfig.html\" title=\"struct pallet_dynamic_fee::GenesisConfig\">GenesisConfig</a>","synthetic":true,"types":["pallet_dynamic_fee::GenesisConfig"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"pallet_dynamic_fee/struct.Module.html\" title=\"struct pallet_dynamic_fee::Module\">Module</a>&lt;T&gt;","synthetic":true,"types":["pallet_dynamic_fee::Module"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"enum\" href=\"pallet_dynamic_fee/enum.Call.html\" title=\"enum pallet_dynamic_fee::Call\">Call</a>&lt;T&gt;","synthetic":true,"types":["pallet_dynamic_fee::Call"]},{"text":"impl Freeze for <a class=\"enum\" href=\"pallet_dynamic_fee/enum.InherentError.html\" title=\"enum pallet_dynamic_fee::InherentError\">InherentError</a>","synthetic":true,"types":["pallet_dynamic_fee::InherentError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_dynamic_fee/struct.InherentDataProvider.html\" title=\"struct pallet_dynamic_fee::InherentDataProvider\">InherentDataProvider</a>","synthetic":true,"types":["pallet_dynamic_fee::InherentDataProvider"]}];
implementors["pallet_ethereum"] = [{"text":"impl Freeze for <a class=\"enum\" href=\"pallet_ethereum/enum.ReturnValue.html\" title=\"enum pallet_ethereum::ReturnValue\">ReturnValue</a>","synthetic":true,"types":["pallet_ethereum::ReturnValue"]},{"text":"impl Freeze for <a class=\"enum\" href=\"pallet_ethereum/enum.EthereumStorageSchema.html\" title=\"enum pallet_ethereum::EthereumStorageSchema\">EthereumStorageSchema</a>","synthetic":true,"types":["pallet_ethereum::EthereumStorageSchema"]},{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_ethereum/struct.IntermediateStateRoot.html\" title=\"struct pallet_ethereum::IntermediateStateRoot\">IntermediateStateRoot</a>","synthetic":true,"types":["pallet_ethereum::IntermediateStateRoot"]},{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_ethereum/struct.GenesisConfig.html\" title=\"struct pallet_ethereum::GenesisConfig\">GenesisConfig</a>","synthetic":true,"types":["pallet_ethereum::GenesisConfig"]},{"text":"impl Freeze for <a class=\"enum\" href=\"pallet_ethereum/enum.Event.html\" title=\"enum pallet_ethereum::Event\">Event</a>","synthetic":true,"types":["pallet_ethereum::Event"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"enum\" href=\"pallet_ethereum/enum.Error.html\" title=\"enum pallet_ethereum::Error\">Error</a>&lt;T&gt;","synthetic":true,"types":["pallet_ethereum::Error"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"pallet_ethereum/struct.Module.html\" title=\"struct pallet_ethereum::Module\">Module</a>&lt;T&gt;","synthetic":true,"types":["pallet_ethereum::Module"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"enum\" href=\"pallet_ethereum/enum.Call.html\" title=\"enum pallet_ethereum::Call\">Call</a>&lt;T&gt;","synthetic":true,"types":["pallet_ethereum::Call"]}];
implementors["pallet_evm"] = [{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"pallet_evm/runner/stack/struct.Runner.html\" title=\"struct pallet_evm::runner::stack::Runner\">Runner</a>&lt;T&gt;","synthetic":true,"types":["pallet_evm::runner::stack::Runner"]},{"text":"impl&lt;'vicinity, 'config, T&gt; Freeze for <a class=\"struct\" href=\"pallet_evm/runner/stack/struct.SubstrateStackState.html\" title=\"struct pallet_evm::runner::stack::SubstrateStackState\">SubstrateStackState</a>&lt;'vicinity, 'config, T&gt;","synthetic":true,"types":["pallet_evm::runner::stack::SubstrateStackState"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"pallet_evm/pallet/struct.Pallet.html\" title=\"struct pallet_evm::pallet::Pallet\">Pallet</a>&lt;T&gt;","synthetic":true,"types":["pallet_evm::pallet::Pallet"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"enum\" href=\"pallet_evm/pallet/enum.Event.html\" title=\"enum pallet_evm::pallet::Event\">Event</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Freeze,&nbsp;</span>","synthetic":true,"types":["pallet_evm::pallet::Event"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"enum\" href=\"pallet_evm/pallet/enum.Error.html\" title=\"enum pallet_evm::pallet::Error\">Error</a>&lt;T&gt;","synthetic":true,"types":["pallet_evm::pallet::Error"]},{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_evm/pallet/struct.GenesisConfig.html\" title=\"struct pallet_evm::pallet::GenesisConfig\">GenesisConfig</a>","synthetic":true,"types":["pallet_evm::pallet::GenesisConfig"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"enum\" href=\"pallet_evm/pallet/enum.Call.html\" title=\"enum pallet_evm::pallet::Call\">Call</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as <a class=\"trait\" href=\"pallet_evm/pallet/trait.Config.html\" title=\"trait pallet_evm::pallet::Config\">Config</a>&gt;::<a class=\"type\" href=\"pallet_evm/pallet/trait.Config.html#associatedtype.Currency\" title=\"type pallet_evm::pallet::Config::Currency\">Currency</a> as Currency&lt;&lt;T as Config&gt;::AccountId&gt;&gt;::Balance: Freeze,&nbsp;</span>","synthetic":true,"types":["pallet_evm::pallet::Call"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"pallet_evm/pallet/struct._GeneratedPrefixForStorageAccountCodes.html\" title=\"struct pallet_evm::pallet::_GeneratedPrefixForStorageAccountCodes\">_GeneratedPrefixForStorageAccountCodes</a>&lt;T&gt;","synthetic":true,"types":["pallet_evm::pallet::_GeneratedPrefixForStorageAccountCodes"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"pallet_evm/pallet/struct._GeneratedPrefixForStorageAccountStorages.html\" title=\"struct pallet_evm::pallet::_GeneratedPrefixForStorageAccountStorages\">_GeneratedPrefixForStorageAccountStorages</a>&lt;T&gt;","synthetic":true,"types":["pallet_evm::pallet::_GeneratedPrefixForStorageAccountStorages"]},{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_evm/struct.EnsureAddressSame.html\" title=\"struct pallet_evm::EnsureAddressSame\">EnsureAddressSame</a>","synthetic":true,"types":["pallet_evm::EnsureAddressSame"]},{"text":"impl&lt;AccountId&gt; Freeze for <a class=\"struct\" href=\"pallet_evm/struct.EnsureAddressRoot.html\" title=\"struct pallet_evm::EnsureAddressRoot\">EnsureAddressRoot</a>&lt;AccountId&gt;","synthetic":true,"types":["pallet_evm::EnsureAddressRoot"]},{"text":"impl&lt;AccountId&gt; Freeze for <a class=\"struct\" href=\"pallet_evm/struct.EnsureAddressNever.html\" title=\"struct pallet_evm::EnsureAddressNever\">EnsureAddressNever</a>&lt;AccountId&gt;","synthetic":true,"types":["pallet_evm::EnsureAddressNever"]},{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_evm/struct.EnsureAddressTruncated.html\" title=\"struct pallet_evm::EnsureAddressTruncated\">EnsureAddressTruncated</a>","synthetic":true,"types":["pallet_evm::EnsureAddressTruncated"]},{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_evm/struct.IdentityAddressMapping.html\" title=\"struct pallet_evm::IdentityAddressMapping\">IdentityAddressMapping</a>","synthetic":true,"types":["pallet_evm::IdentityAddressMapping"]},{"text":"impl&lt;H&gt; Freeze for <a class=\"struct\" href=\"pallet_evm/struct.HashedAddressMapping.html\" title=\"struct pallet_evm::HashedAddressMapping\">HashedAddressMapping</a>&lt;H&gt;","synthetic":true,"types":["pallet_evm::HashedAddressMapping"]},{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_evm/struct.GenesisAccount.html\" title=\"struct pallet_evm::GenesisAccount\">GenesisAccount</a>","synthetic":true,"types":["pallet_evm::GenesisAccount"]},{"text":"impl&lt;C, OU&gt; Freeze for <a class=\"struct\" href=\"pallet_evm/struct.EVMCurrencyAdapter.html\" title=\"struct pallet_evm::EVMCurrencyAdapter\">EVMCurrencyAdapter</a>&lt;C, OU&gt;","synthetic":true,"types":["pallet_evm::EVMCurrencyAdapter"]}];
implementors["pallet_evm_precompile_blake2"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_evm_precompile_blake2/struct.Blake2F.html\" title=\"struct pallet_evm_precompile_blake2::Blake2F\">Blake2F</a>","synthetic":true,"types":["pallet_evm_precompile_blake2::Blake2F"]}];
implementors["pallet_evm_precompile_bn128"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_evm_precompile_bn128/struct.Bn128Add.html\" title=\"struct pallet_evm_precompile_bn128::Bn128Add\">Bn128Add</a>","synthetic":true,"types":["pallet_evm_precompile_bn128::Bn128Add"]},{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_evm_precompile_bn128/struct.Bn128Mul.html\" title=\"struct pallet_evm_precompile_bn128::Bn128Mul\">Bn128Mul</a>","synthetic":true,"types":["pallet_evm_precompile_bn128::Bn128Mul"]},{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_evm_precompile_bn128/struct.Bn128Pairing.html\" title=\"struct pallet_evm_precompile_bn128::Bn128Pairing\">Bn128Pairing</a>","synthetic":true,"types":["pallet_evm_precompile_bn128::Bn128Pairing"]}];
implementors["pallet_evm_precompile_curve25519"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_evm_precompile_curve25519/struct.Curve25519Add.html\" title=\"struct pallet_evm_precompile_curve25519::Curve25519Add\">Curve25519Add</a>","synthetic":true,"types":["pallet_evm_precompile_curve25519::Curve25519Add"]},{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_evm_precompile_curve25519/struct.Curve25519ScalarMul.html\" title=\"struct pallet_evm_precompile_curve25519::Curve25519ScalarMul\">Curve25519ScalarMul</a>","synthetic":true,"types":["pallet_evm_precompile_curve25519::Curve25519ScalarMul"]}];
implementors["pallet_evm_precompile_dispatch"] = [{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"pallet_evm_precompile_dispatch/struct.Dispatch.html\" title=\"struct pallet_evm_precompile_dispatch::Dispatch\">Dispatch</a>&lt;T&gt;","synthetic":true,"types":["pallet_evm_precompile_dispatch::Dispatch"]}];
implementors["pallet_evm_precompile_ed25519"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_evm_precompile_ed25519/struct.Ed25519Verify.html\" title=\"struct pallet_evm_precompile_ed25519::Ed25519Verify\">Ed25519Verify</a>","synthetic":true,"types":["pallet_evm_precompile_ed25519::Ed25519Verify"]}];
implementors["pallet_evm_precompile_modexp"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_evm_precompile_modexp/struct.Modexp.html\" title=\"struct pallet_evm_precompile_modexp::Modexp\">Modexp</a>","synthetic":true,"types":["pallet_evm_precompile_modexp::Modexp"]}];
implementors["pallet_evm_precompile_sha3fips"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_evm_precompile_sha3fips/struct.Sha3FIPS256.html\" title=\"struct pallet_evm_precompile_sha3fips::Sha3FIPS256\">Sha3FIPS256</a>","synthetic":true,"types":["pallet_evm_precompile_sha3fips::Sha3FIPS256"]},{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_evm_precompile_sha3fips/struct.Sha3FIPS512.html\" title=\"struct pallet_evm_precompile_sha3fips::Sha3FIPS512\">Sha3FIPS512</a>","synthetic":true,"types":["pallet_evm_precompile_sha3fips::Sha3FIPS512"]}];
implementors["pallet_evm_precompile_simple"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_evm_precompile_simple/struct.Identity.html\" title=\"struct pallet_evm_precompile_simple::Identity\">Identity</a>","synthetic":true,"types":["pallet_evm_precompile_simple::Identity"]},{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_evm_precompile_simple/struct.ECRecover.html\" title=\"struct pallet_evm_precompile_simple::ECRecover\">ECRecover</a>","synthetic":true,"types":["pallet_evm_precompile_simple::ECRecover"]},{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_evm_precompile_simple/struct.Ripemd160.html\" title=\"struct pallet_evm_precompile_simple::Ripemd160\">Ripemd160</a>","synthetic":true,"types":["pallet_evm_precompile_simple::Ripemd160"]},{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_evm_precompile_simple/struct.Sha256.html\" title=\"struct pallet_evm_precompile_simple::Sha256\">Sha256</a>","synthetic":true,"types":["pallet_evm_precompile_simple::Sha256"]},{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_evm_precompile_simple/struct.ECRecoverPublicKey.html\" title=\"struct pallet_evm_precompile_simple::ECRecoverPublicKey\">ECRecoverPublicKey</a>","synthetic":true,"types":["pallet_evm_precompile_simple::ECRecoverPublicKey"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()